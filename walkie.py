import socket
import sys
import sounddevice as sd
import numpy as np

FORMATO_AUDIO = 'int8'    # Calidad básica (8 bits)
CANALES = 1               # Mono: un solo canal de sonido
FRECUENCIA = 44100        # Qué tan nítido se escucha
MAX_FRAMES = 300000       # Cuánto tiempo grabamos
FRAME_SIZE = 1            # Cada pedacito de sonido pesa 1 byte

def StartServer(port):
    # Creamos el socket usando el protocolo de mensajes rápidos (UDP)
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        # El programa lo conecto al puerto elegido
        s.bind(('', port))
        print(f"Servidor listo. Estoy esperando que me mandes audio en el puerto {port}...")
        
        while True:
            # Nos quedamos sentados esperando a que llegue un paquete de datos
            data, addr = s.recvfrom(MAX_FRAMES * FRAME_SIZE)

            frames_to_play = len(data) // FRAME_SIZE

            # El sonido llega como binario, aquí lo convertimos en números
            audio_data = np.frombuffer(data, dtype=np.int8)

            print(f"¡Llegó audio! {frames_to_play}kb Reproduciendo lo que mandó: {addr}")

            # Hacemos que suene por los parlantes
            sd.play(audio_data, FRECUENCIA)
            sd.wait() # Esperamos a que termine de sonar para no mezclar audios

def StartClient(port):
    # Creamos el socket usando el protocolo de mensajes rápidos (UDP)
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        server_ip = '127.0.0.1'
        print(f"Grabando...")

        # Guarda el sonido como numeros
        recording = sd.rec(MAX_FRAMES, samplerate=FRECUENCIA, channels=CANALES, dtype=FORMATO_AUDIO)
        sd.wait() # Esperamos a que termines de hablar

        # Convertimos esa lista de números a binario
        data_to_send = recording.tobytes()

        # Calculamos cuánto pesa todo el audio en bytes
        total_bytes = len(data_to_send)

        # Mi compu no admite pedazos grandes, por eso lo mando de 8 en 8
        CHUNK_SIZE = 8192

        # Vamos mandando pedazo por pedazo hasta terminar
        for i in range(0, total_bytes, CHUNK_SIZE):
            chunk = data_to_send[i:i + CHUNK_SIZE]
            # Lanzamos el pedazo a la IP y el puerto del servidor
            s.sendto(chunk, (server_ip, port))
            
        print("Todo listo")

if __name__ == "__main__":

    if len(sys.argv) < 3:
        print("Error. Debes escribir: python walkie.py [client o server] [puerto]")
        sys.exit()
    
    mode = sys.argv[1].lower()
    port = int(sys.argv[2])

    if mode == "server":
        StartServer(port)
    elif mode == "client":
        StartClient(port)