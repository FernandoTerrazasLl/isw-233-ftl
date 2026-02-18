from Cells.StateCells import StateCells


class StateCellEmpty(StateCells):

    def __init__(self, cell):
        super().__init__(cell)
        self._state_name = "empty"

    def get_state(self):
        return self._state_name

    def set_state(self, state):
        if isinstance(state, StateCells):
            self.cell.set_state(state)
        else:
            self._state_name = state
