!pip install openai

API_KEY= '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'
import openai
import os
os.environ['OPENAI_Key']=API_KEY
openai.api_key=os.environ['OPENAI_Key']

keep_prompting=True
while keep_prompting:
    prompt=input('Hello, How are You?')
    if prompt=='exit':
        keep_prompting=False
    else:
        response=openai.Completion.create(engine='text-davinci-003',prompt=prompt,max_tokens=200)
        print(response['choices'][0]['text'])