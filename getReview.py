from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)

prompt = '''
       I will give you a report details You have to analyze this report and give a summary and also tell some improvement 
       that are to be taken
       give only the changes to be done
       give in less than 100 words
'''

def get_review_for_report(prompt):
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    client = genai.Client(api_key=GEMINI_API_KEY)

    query = prompt 
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=query)
    print(response.text)

    return response.text

get_review_for_report(prompt)