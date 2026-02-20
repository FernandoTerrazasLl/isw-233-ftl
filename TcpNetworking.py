import socket

class TcpConnection:

	def __init__(self, sock: socket.socket):
		self.sock = sock

	def recv_exact(self, n: int) -> bytes:
		buf = b""
		while len(buf) < n:
			chunk = self.sock.recv(n - len(buf))
			if not chunk:
				raise ConnectionError("socket closed")
			buf += chunk
		return buf

	def read_move(self) -> str:
		data = self.recv_exact(2)
		return data.decode('ascii')

	def send_move(self, text: str):
		b = text.encode('ascii')
		if len(b) != 2:
			raise ValueError("move must be exactly 2 ascii bytes")
		self.sock.sendall(b)

	def read_result(self) -> int:
		b = self.recv_exact(1)
		return b[0]

	def send_result(self, code: int):
		if not (0 <= code <= 255):
			raise ValueError("result must be a byte")
		self.sock.sendall(bytes([code]))

	def close(self):
		try:
			if self.sock is not None:
				self.sock.close()
		finally:
			self.sock = None


def start_server(port: int, host: str = '0.0.0.0') -> TcpConnection:
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
	try:
		s.bind((host, int(port)))
		s.listen(1)
		conn, addr = s.accept()
	except OSError as e:
		try:
			s.close()
		except Exception:
			pass
		raise RuntimeError(
			f"Failed to bind/listen on {host}:{port} — {e}. Is the port already in use?"
		) from e
	s.close()
	return TcpConnection(conn)


def start_client(host: str, port: int, timeout: float = 5.0) -> TcpConnection:
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.settimeout(timeout)
	s.connect((host, int(port)))
	s.settimeout(None)
	return TcpConnection(s)

