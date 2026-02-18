class Ship:
    def __init__(self, positions):
        self.positions = [tuple(p) for p in positions]
        self.hits = set()
        self.length = len(self.positions)

    def contains(self, pos):
        return tuple(pos) in self.positions

    def hit(self, pos):
        p = tuple(pos)
        if p in self.positions:
            self.hits.add(p)
        return self.is_sunk()

    def is_sunk(self):
        return len(self.hits) >= self.length

    def positions_set(self):
        return set(self.positions)
