from flask import Flask, request, jsonify
import numpy as np
import pickle
import os
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ruta del archivo .pkl
model_path = os.path.join(os.path.dirname(__file__), 'heartAttackPrediction.pkl')

# Cargar el modelo guardado y los nombres de las características
with open(model_path, 'rb') as file:
    model = pickle.load(file)

# Lista de nombres de las características (debe coincidir con las características usadas para entrenar el modelo)
feature_names = [
    'age', 'sex', 'cp', 'trtbps', 'chol', 'fbs', 'restecg',
    'thalachh', 'exng', 'oldpeak', 'slp', 'caa', 'thall'
]

@app.route('/')
def home():
    return "Heart Attack Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Verificar que todas las características estén presentes en los datos de entrada
        for feature in feature_names:
            if feature not in data:
                raise KeyError(f'Missing key: {feature}')

        # Convertir los datos de entrada en un DataFrame con nombres de características
        input_data = pd.DataFrame([[
            data['age'], data['sex'], data['cp'], data['trtbps'], data['chol'],
            data['fbs'], data['restecg'], data['thalachh'], data['exng'], 
            data['oldpeak'], data['slp'], data['caa'], data['thall']
        ]], columns=feature_names)

        # Log para verificar los datos de entrada
        print("Datos de entrada recibidos:\n", input_data)

        # Realizar la predicción
        prediction = model.predict(input_data)

        # Log para verificar la predicción
        print("Predicción realizada:", prediction)

        # Devolver el resultado en formato JSON
        result = 'La persona tiende a no tener un ataque al corazon' if prediction[0] == 1 else 'La persona tiende a tener un ataque al corazon'
        return jsonify({'prediction': result})
    except KeyError as e:
        error_message = f'Missing key: {str(e)}'
        print(error_message)
        return jsonify({'error': error_message}), 400
    except ValueError as e:
        error_message = f'Value error: {str(e)}'
        print(error_message)
        return jsonify({'error': error_message}), 400
    except Exception as e:
        error_message = f'An error occurred: {str(e)}'
        print(error_message)
        return jsonify({'error': error_message}), 500

if __name__ == '__main__':
    app.run(debug=True)