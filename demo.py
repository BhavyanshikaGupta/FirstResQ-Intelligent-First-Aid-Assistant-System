import speech_recognition as sr
import requests
import pygame
import time

# 👇 change this IP to your Flask server laptop’s IP
SERVER_URL = "http://192.168.43.6:5000/chat/1"

pygame.init()
screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption("Voice Chat Test")
font = pygame.font.Font(None, 36)

def show_text(text):
    screen.fill((0, 0, 0))
    y = 50
    for line in text.split("\n"):
        rendered = font.render(line, True, (0, 255, 0))
        screen.blit(rendered, (20, y))
        y += 40
    pygame.display.flip()

def get_voice_input():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        show_text("🎤 Listening...")
        audio = r.listen(source)
    try:
        text = r.recognize_google(audio)
        return text
    except sr.UnknownValueError:
        return "Could not understand."
    except sr.RequestError:
        return "Speech service error."

while True:
    show_text("Say something to the AI...\n(Press Ctrl+C to quit)")
    time.sleep(1)

    # 1️⃣ Get speech → text
    user_text = get_voice_input()
    show_text(f"You said:\n{user_text}")

    # 2️⃣ Send to Flask API
    try:
        response = requests.post(SERVER_URL, json={"message": user_text})
        reply = response.json().get("reply", "No reply received.")
    except Exception as e:
        reply = f"Error: {e}"

    # 3️⃣ Display reply
    show_text(f"AI Reply:\n{reply}")
    time.sleep(5)