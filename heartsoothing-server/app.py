from flask import Flask, request, jsonify
import numpy as np
import pickle
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ruta del archivo .pkl
model_path = os.path.join(os.path.dirname(__file__), 'heartAttackPrediction.pkl')

# Cargar el modelo guardado
with open(model_path, 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return "Heart Attack Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Convertir los datos de entrada en una array numpy
        input_data = np.array([[
            data['age'], data['sex'], data['cp'], data['trtbps'], data['chol'],
            data['fbs'], data['restecg'], data['thalachh'], data['exng'], 
            data['oldpeak'], data['slp'], data['caa'], data['thall']
        ]])

        # Log para verificar los datos de entrada
        print("Datos de entrada recibidos:", input_data)

        # Realizar la predicción
        prediction = model.predict(input_data)

        # Log para verificar la predicción
        print("Predicción realizada:", prediction)

        # Devolver el resultado en formato JSON
        result = 'The person has a heart disease' if prediction[0] == 1 else 'The person does not have a heart disease'
        return jsonify({'prediction': result})
    except KeyError as e:
        return jsonify({'error': f'Missing key: {str(e)}'}), 400
    except ValueError as e:
        return jsonify({'error': f'Value error: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
