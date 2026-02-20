import socket
import sys
import sounddevice as sd
import numpy as np

FORMATO_AUDIO = 'int8'    # calidad (8 bits)
CANALES = 1               # mono: un solo canal de sonido
FRECUENCIA = 44100        # que tan bien se escucha
MAX_FRAMES = 65000        # bits que acepto

def StartServer(port):
    # Creamos socket          IPV4              UDP
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        # conecto el programa al puerto 
        s.bind(('', port))
        print(f"Servidor listo. Estoy esperando que me mandes audio en el puerto {port}...")
        
        while True:
            # Esperamos el audio
            data, addr = s.recvfrom(MAX_FRAMES)

            frames_to_play = len(data)

            # convierto binario a números
            audio_data = np.frombuffer(data, dtype=np.int8)

            print(f"¡Llegó audio! {frames_to_play} bits Reproduciendo lo que mandó: {addr}")

            sd.play(audio_data, FRECUENCIA)
            sd.wait() # esperamos que suene para sonar lo demas

def StartClient(port):
    #Creamos socket          IPV4              UDP
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        server_ip = '127.0.0.1'
        print(f"Grabando...")

        # guarda sonido como numero
        recording = sd.rec(MAX_FRAMES, samplerate=FRECUENCIA, channels=CANALES, dtype=FORMATO_AUDIO)
        sd.wait() 

        # convertimos numeros a bytes
        data_to_send = recording.tobytes()

        # cuantos bytes tiene
        total_bytes = len(data_to_send)

        # mandar de 8 en 8 para que aguante la compu
        CHUNK_SIZE = 8192

        #for      inicio    fin         paso
        for i in range(0, total_bytes, CHUNK_SIZE):
            chunk = data_to_send[i:i + CHUNK_SIZE] # corta el audio en bits de i a i+8bits
            # enviamos el chunk al address
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