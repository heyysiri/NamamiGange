import g4f 
from rasa_sdk import Action, Tracker
from typing import Any, Text, Dict, List
from rasa_sdk.executor import CollectingDispatcher
from g4f.Provider import You
import random
import requests
import sqlite3

class GPT3ChatCompletionAction(Action):

    def name(self):
        return "action_gpt2"

    def run(self, dispatcher, tracker, domain):
        print("Hello, this is Siri trying to debug")
        user_message = tracker.latest_message.get('text')
        provider = You()
        response = g4f.ChatCompletion.create(
            model="gpt-3.5-turbo",
            provider=provider,
            messages=[{"role": "user", "content": "Answer directly to the question, make it VERY educative, in less than 2 sentences. Add some Cha-Cha Choudhary style and mannerism to it: " + user_message}],
            stream=True,
        )
        txt = ""
        for message in response:
            message_dict = {"text": message}
            txt += message_dict["text"] + ""
        text=txt.strip()

        chacha_lines = [
            "Chacha Chaudhary's brain works faster than a computer!",
            "Chacha Chaudhary makes every difficulty seem easy!",
            "The secret to accomplishing anything big in the world is teamwork!",
            "Chacha Chaudhary always thinks one step ahead!",
            "When Chacha Chaudhary speaks, everyone understands!",
            "Remember it well, Chacha Chaudhary always makes the right decisions!",
            "Any problem can be solved if there is determination within oneself!",
            "The game of strategy runs in Chacha Chaudhary's mind!",
            "Courage is not giving up in the face of any difficulty!",
            "Faster than the mind, faster than the heart. Chacha Chaudhary, everyone's big man!",
            "Every difficulty has a solution, a little patience is all that's needed!",
            "Chacha Chaudhary never accepts defeat!",
            "Whenever there's a problem, Chacha Chaudhary brings the solution!",
    ]

        chacha_prefix = [
            "Well, well, well, ",
            "Oh, my dear friend, ",
            "Well, my friend, ",
            "Oh, my friend, ",
            "Oh, my dear, ",
            "Well, well, ",
            "Well, little ones, ",
            "Well, my dear children, ",
            "Oh, my curious little one, ",
            "Well, my curious little one, ",
            "Well, my curious friend, ",
            "Oh, my curious friend, ",

        ]
        selected_line = random.choice(chacha_lines)
        prefix = random.choice(chacha_prefix)

        dispatcher.utter_message(text=prefix + text+ " "+ selected_line)

        return []

class ActionWeather(Action):
    def name(self) -> Text:
        return "action_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        print("Got into action_weather")
        api_key = '357eb6ab3216918390b603bc4936188d'
        user_city = 'new delhi'
        base_url = f'http://api.openweathermap.org/data/2.5/weather?q={user_city}&appid={api_key}'
        response = requests.get(base_url)
        data = response.json()
        if response.status_code == 200:
            weather_desc = data['weather'][0]['description']
            temperature = round(data['main']['temp'] - 273.15, 2) 
            message = f"The weather in {user_city} is {weather_desc}. The temperature is {temperature}°C."
            air_quality_url = f'http://api.openweathermap.org/data/2.5/air_pollution?lat={data["coord"]["lat"]}&lon={data["coord"]["lon"]}&appid={api_key}'
            air_quality_response = requests.get(air_quality_url)
            if air_quality_response.status_code == 200:
                air_quality_data = air_quality_response.json()
                air_quality_index = air_quality_data['list'][0]['main']['aqi']
                message += f"\nThe air quality index in {user_city} is {air_quality_index}."
            else:
                message += "\nSorry, I couldn't retrieve the air quality information at the moment."
        else:
            message = "Sorry, I couldn't retrieve the weather information at the moment."

        provider = You()
        response = g4f.ChatCompletion.create(
            model="gpt-3.5-turbo",
            provider=provider,
            messages=[{"role": "user", "content": "Make this sentence creative, exclaiming, in ONLY 1 line, mentioning how good or bad the air quality and temperature is, creatively: " + message}],
            stream=True,
        )
        txt = ""
        for message in response:
            message_dict = {"text": message}
            txt += message_dict["text"] + ""
        text=txt.strip('**')

        dispatcher.utter_message(text=text)

        return []
class FEEDBACK1(Action):
    def name(self):
        return "action_feedback1"
    
    def run(self, dispatcher, tracker, domain):
        print("Got into action_feedback1")
        emo = tracker.get_slot("rating")
        suggestion = tracker.latest_message.get('text')
        print(f"emo: {emo}, type: {type(emo)}")
        print(f"suggestion: {suggestion}, type: {type(suggestion)}")
        with sqlite3.connect('rasa_feedback2.db') as conn:
            cursor = conn.cursor()
            cursor.execute('INSERT INTO feedback2 (rating, suggestion) VALUES (?, ?)', (emo, suggestion))
            conn.commit()
            cursor.execute('SELECT * FROM feedback2')
            rows = cursor.fetchall()
            for row in rows:
                print(row)
        th = "Thank you for your rating and suggestions!"
        print("before disp: " + th)
        dispatcher.utter_message(text=th)
        print("after disp: " + th)
        return []