from fastapi import FastAPI

import tensorflow as tf
from tensorflow.keras.models import load_model
from keras.preprocessing.text import tokenizer_from_json
from tensorflow.keras.preprocessing.sequence import pad_sequences
import json

# Load the model and tokenizer
model = load_model("recipe_model.h5")
with open("tokenizer.json", "r") as json_file:
    tokenizer_json = json_file.read()
    tokenizer = tokenizer_from_json(tokenizer_json)

try:
    with open("titles.json", "r") as title_file:
        titles_json = title_file.read()
        if titles_json:
            titles_list = json.loads(titles_json)
        
        else:
            print("The file is empty.")
except json.decoder.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
except FileNotFoundError:
    print("File 'titles.json' not found.")


app = FastAPI()

@app.get("/")
def get():
  # Example of using the loaded model and tokenizer for prediction
  new_ingredients = "pecan vanilla water"
  new_ingredients_sequence = tokenizer.texts_to_sequences([new_ingredients])
  new_ingredients_sequence_padded = pad_sequences(new_ingredients_sequence, maxlen=90)
  predicted_title_index = int(model.predict(new_ingredients_sequence_padded).argmax())
  print(predicted_title_index)
# Decode the predicted index back to title
  predicted_title = titles_list[predicted_title_index]
  print(predicted_title)
  return{"message": predicted_title}