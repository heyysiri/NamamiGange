# import g4f
# import asyncio

# _providers = [
#     g4f.Provider.You,
# ]

# async def run_provider(provider: g4f.Provider.BaseProvider):
#     try:
#         response = await g4f.ChatCompletion.create_async(
#             model=g4f.models.default,
#             messages=[{"role": "user", "content": "Explain the Namami Gange Program in 1 short sentence in cha-cha choudhary mannerism creatively."}],
#             provider=provider,
#         )
#         print(f"{provider.__name__}:", response)
#     except Exception as e:
#         print(f"{provider.__name__}:", e)
        
# async def run_all():
#     calls = [
#         run_provider(provider) for provider in _providers
#     ]
#     await asyncio.gather(*calls)

# asyncio.run(run_all())
# # import sqlite3

# # # Connect to the database
# # conn = sqlite3.connect('rasa_feedback.db')
# # cursor = conn.cursor()

# # # Execute a SELECT query to retrieve data from the feedback table
# # cursor.execute('SELECT * FROM feedback')

# # # Fetch all rows from the table
# # rows = cursor.fetchall()

# # # Display the contents of the table
# # for row in rows:
# #     print(row)

# # # Close the connection
# # conn.close()


# # import requests
# # api_key = '357eb6ab3216918390b603bc4936188d'

# # # Get the city name from the user's message or use a default city
# # user_city = 'Hyderabad'

# # # OpenWeatherMap API URL
# # base_url = f'http://api.openweathermap.org/data/2.5/weather?q={user_city}&appid={api_key}'

# # # Send GET request to the API
# # response = requests.get(base_url)
# # data = response.json()

# # # Check if the API request was successful
# # if response.status_code == 200:
# #     weather_desc = data['weather'][0]['description']
# #     temperature = round(data['main']['temp'] - 273.15, 2)  # Convert temperature to Celsius

# #     # Respond with weather information
# #     print(f"The weather in {user_city} is {weather_desc}. The temperature is {temperature}°C.")
# # else:
# #     print("Sorry, I couldn't retrieve the weather information at the moment.")

# # import g4f
# # import asyncio

# # _providers = [
# #     # g4f.Provider.Aichat,
# #     # g4f.Provider.ChatBase,
# #     # g4f.Provider.Bing,
# #     # g4f.Provider.GptGo,
# #     g4f.Provider.You,
# #     # g4f.Provider.Yqcloud,
# # ]

# # async def run_provider(provider: g4f.Provider.BaseProvider):
# #     try:
# #         response = await g4f.ChatCompletion.create_async(
# #             model=g4f.models.default,
# #             messages=[{"role": "user", "content": "What is the Namami Gnage Program? Answer the question in Cha-Cha Choudary mannerism and style, in 2 short sentences, in a creative way for kids to understand. (don't provide external links)"}],
# #             provider=provider,
# #         )
# #         print(f"{provider.__name__}:", response)
# #     except Exception as e:
# #         print(f"{provider.__name__}:", e)
        
# # async def run_all():
# #     calls = [
# #         run_provider(provider) for provider in _providers
# #     ]
# #     await asyncio.gather(*calls)

# # asyncio.run(run_all())

# # import g4f

# # from g4f.Provider import (
# #     AItianhu,
# #     Aichat,
# #     Bard,
# #     Bing,
# #     ChatBase,
# #   ChatgptAi,
# #     OpenaiChat,
# #     Vercel,
# #     You,
# #     Yqcloud,
# # )

# # # Set with provider
# # response = g4f.ChatCompletion.create(
# #     model="gpt-3.5-turbo",
# #     provider=g4f.Provider.You,
# #     messages=[{"role": "user", "content": "What is the Namami Gange Program? Answer the question in Cha-Cha Choudary mannerism and style, in 2 short sentences, in a creative way for kids to understand. (don't provide external links)"}],
# #     stream=True,
# # )

# # for message in response:
# #     print(message, end="")