import random
from typing import List, Tuple
from Ship import Ship


class SeaBattleField:
    WIDTH: int = 8
    HEIGHT: int = 8
    TOTAL_SHIP_CELLS: int = 20
    SHIP_PLACEMENTS: List[Tuple[int, int]] = [(4, 1), (3, 2), (2, 3), (1, 4)]

    def __init__(self) -> None:
        self.own: List[List[str]] = [["UNKNOWN" for _ in range(self.WIDTH)] for _ in range(self.HEIGHT)]
        self.opponent: List[List[str]] = [["UNKNOWN" for _ in range(self.WIDTH)] for _ in range(self.HEIGHT)]
        self.ships: List[Ship] = []

    @staticmethod
    def _neighbors8(x: int, y: int):
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                yield x + dx, y + dy

    def _in_bounds(self, x: int, y: int) -> bool:
        return 0 <= x < self.WIDTH and 0 <= y < self.HEIGHT

    def _can_place(self, cells: List[Tuple[int, int]]) -> bool:
        for x, y in cells:
            if not self._in_bounds(x, y):
                return False
            if self.own[y][x] == "SHIP":
                return False
            for nx, ny in self._neighbors8(x, y):
                if self._in_bounds(nx, ny) and self.own[ny][nx] == "SHIP":
                    return False
        return True

    def _place_ship(self, cells: List[Tuple[int, int]]) -> None:
        for x, y in cells:
            self.own[y][x] = "SHIP"
        self.ships.append(Ship(cells))

    def get_random_field(self, seed: int) -> None:
        rnd = random.Random(seed)
        self.own = [["UNKNOWN" for _ in range(self.WIDTH)] for _ in range(self.HEIGHT)]
        self.ships = []

        for length, count in self.SHIP_PLACEMENTS:
            placed = 0
            tries = 0
            while placed < count:
                tries += 1
                if tries > 10000:
                    raise RuntimeError("Failed to place ships with given seed")
                horiz = rnd.choice([True, False]) if length > 1 else True
                if horiz:
                    x = rnd.randrange(0, self.WIDTH - length + 1)
                    y = rnd.randrange(0, self.HEIGHT)
                    cells = [(x + i, y) for i in range(length)]
                else:
                    x = rnd.randrange(0, self.WIDTH)
                    y = rnd.randrange(0, self.HEIGHT - length + 1)
                    cells = [(x, y + i) for i in range(length)]

                if self._can_place(cells):
                    self._place_ship(cells)
                    placed += 1

    def parse_move(self, text):
        if not isinstance(text, str) or len(text) < 2:
            return None
        text = text.strip().upper()
        col = text[0]
        row = text[1:]
        if col < 'A' or col > chr(ord('A') + self.WIDTH - 1):
            return None
        try:
            r = int(row)
        except ValueError:
            return None
        if not (1 <= r <= self.HEIGHT):
            return None
        x = ord(col) - ord('A')
        y = r - 1
        return x, y

    def move_to_string(self, x, y):
        return f"{chr(ord('A') + x)}{y+1}"

    def shoot(self, x, y):
        if not self._in_bounds(x, y):
            return 0

        if self.own[y][x] != "SHIP":
            self.own[y][x] = "EMPTY"
            return 0

        for ship in self.ships:
            if ship.contains((x, y)):
                sunk = ship.hit((x, y))
                self.own[y][x] = "HIT"
                if sunk:
                    for sx, sy in ship.positions:
                        self.own[sy][sx] = "KILL"
                    return 2
                return 1

    def mark_miss(self, x, y):
        if 0 <= x < self.WIDTH and 0 <= y < self.HEIGHT:
            self.opponent[y][x] = "EMPTY"

    def mark_hit(self, x, y):
        if 0 <= x < self.WIDTH and 0 <= y < self.HEIGHT:
            self.opponent[y][x] = "HIT"

    def mark_kill(self, x, y):
        if 0 <= x < self.WIDTH and 0 <= y < self.HEIGHT:
            self.opponent[y][x] = "KILL"

    def opponent_is_loser(self):
        cnt = sum(1 for row in self.opponent for v in row if v == "KILL")
        return cnt >= self.TOTAL_SHIP_CELLS

    def is_loser(self):
        return all(ship.is_sunk() for ship in self.ships)

    def print_fields(self):
        cols = [chr(ord('A') + i) for i in range(self.WIDTH)]

        def cell_symbol(value: str, is_own: bool) -> str:
            mapping = {
                "UNKNOWN": '#',
                "EMPTY": '*',
                "HIT": 'X',
                "KILL": 'K',
            }
            if value == "SHIP":
                return 'B' if is_own else '#'
            return mapping.get(value, '?')

        print("Own field:")
        print("Legend: # unknown, B your ship, * empty, X hit, K kill")
        print("  " + " ".join(cols))
        for y in range(self.HEIGHT):
            row = [cell_symbol(self.own[y][x], is_own=True) for x in range(self.WIDTH)]
            print(f"{y+1:>2} " + " ".join(row))

        print("\nOpponent view:")
        print("  " + " ".join(cols))
        for y in range(self.HEIGHT):
            row = [cell_symbol(self.opponent[y][x], is_own=False) for x in range(self.WIDTH)]
            print(f"{y+1:>2} " + " ".join(row))

