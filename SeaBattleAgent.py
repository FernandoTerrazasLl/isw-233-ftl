from typing import Iterator, Tuple
from SeaBattleField import SeaBattleField

MISS = 0
HIT = 1
KILL = 2

class SeaBattleAgent:
    def __init__(self, conn, seed: int, is_client: bool) -> None:
        self.conn = conn
        self.field = SeaBattleField()
        self.field.get_random_field(seed)
        self.my_turn = is_client

    def _neighbors8(self, x: int, y: int) -> Iterator[Tuple[int, int]]:
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                yield x + dx, y + dy

    def _handle_kill(self, x: int, y: int) -> None:
        stack = [(x, y)]
        ship = set()
        while stack:
            cx, cy = stack.pop()
            if (cx, cy) in ship:
                continue
            if not (0 <= cx < self.field.WIDTH and 0 <= cy < self.field.HEIGHT):
                continue
            if self.field.opponent[cy][cx] in ("HIT", "KILL") or (cx, cy) == (x, y):
                ship.add((cx, cy))
                for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
                    if 0 <= nx < self.field.WIDTH and 0 <= ny < self.field.HEIGHT and self.field.opponent[ny][nx] == "HIT":
                        stack.append((nx, ny))
        
        for sx, sy in ship:
            self.field.mark_kill(sx, sy)

    def _send_move_and_get_result(self, x: int, y: int) -> int:
        mstr = self.field.move_to_string(x, y)
        self.conn.send_move(mstr)
        return self.conn.read_result()

    def _handle_opponent_turn(self) -> bool:
        try:
            mvtxt = self.conn.read_move()
        except Exception:
            print("Connection closed by opponent.")
            return False

        mv = self.field.parse_move(mvtxt)
        if not mv:
            self.conn.send_result(MISS)
            self.my_turn = True
            return True

        x, y = mv
        res = self.field.shoot(x, y)
        self.conn.send_result(res)
        if self.field.is_loser():
            print("You lost")
            return False
        self.my_turn = (res == MISS)
        return True

    def start_game(self) -> None:
        if not self.field.ships:
            print("No ships placed. Aborting.")
            return

        try:
            while True:
                self.field.print_fields()
                if self.field.is_loser():
                    print("You lost")
                    break

                if self.my_turn:
                    txt = input("Move (A1..H8 or quit): ").strip()
                    if txt.lower() == 'quit':
                        break
                    mv = self.field.parse_move(txt)
                    if not mv:
                        print("Invalid. Use A1..H8")
                        continue
                    x, y = mv
                    if self.field.opponent[y][x] != "UNKNOWN":
                        print("Cell known. Pick another.")
                        continue

                    res = self._send_move_and_get_result(x, y)
                    if res == MISS:
                        self.field.mark_miss(x, y)
                        self.my_turn = False
                    elif res == HIT:
                        self.field.mark_hit(x, y)
                        self.my_turn = True
                    elif res == KILL:
                        self._handle_kill(x, y)
                        if self.field.opponent_is_loser():
                            print("You won")
                            break
                        self.my_turn = True
                else:
                    if not self._handle_opponent_turn():
                        break
        finally:
            try:
                self.conn.close()
            except Exception:
                pass

