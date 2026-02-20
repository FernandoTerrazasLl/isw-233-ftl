import sys
from TcpNetworking import start_server, start_client
from SeaBattleAgent import SeaBattleAgent


def syntaxInputError():
        print("Insert one of the options below:")
        print("  Server: python3 main.py server <seed> <port>")
        print("  Client: python3 main.py client <seed> <server_ip> <port>")


def main():
    if len(sys.argv) < 2:
        syntaxInputError()
        return
    
    mode = sys.argv[1].lower()
    if mode == 'server' and len(sys.argv) == 4:
        seed = int(sys.argv[2])
        port = int(sys.argv[3])
        conn = start_server(port)
        agent = SeaBattleAgent(conn, seed, is_client=False)
        agent.start_game()
        
    elif mode == 'client' and len(sys.argv) == 5:
        seed = int(sys.argv[2])
        host = sys.argv[3]
        port = int(sys.argv[4])
        conn = start_client(host, port)
        agent = SeaBattleAgent(conn, seed, is_client=True)
        agent.start_game()
    else:
        syntaxInputError()


if __name__ == "__main__":
    main()