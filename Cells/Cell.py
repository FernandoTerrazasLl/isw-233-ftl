from Cells.StateCellEmpty import StateCellEmpty

class Cell:
    def __init__(self):
        # state holds an instance of a StateCells subclass
        self.state = StateCellEmpty(self)

    def get_state(self):
        # delegate to current state instance
        return self.state.get_state()

    def set_state(self, state):
        # accept a StateCells instance and assign as the new state
        self.state = state
