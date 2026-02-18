from abc import ABC, abstractmethod


class StateCells(ABC):

    def __init__(self, cell):
        self.cell = cell

    @abstractmethod
    def get_state(self):
        raise NotImplementedError()

    @abstractmethod
    def set_state(self, state):
        raise NotImplementedError()

