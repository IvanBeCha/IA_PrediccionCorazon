import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '0',
    cp: '0',
    trtbps: '',
    chol: '',
    fbs: '0',
    restecg: '0',
    thalachh: '',
    exng: '0',
    oldpeak: '',
    slp: '0',
    caa: '0',
    thall: '0'
  });

  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      age: Number(formData.age),
      sex: Number(formData.sex),
      cp: Number(formData.cp),
      trtbps: Number(formData.trtbps),
      chol: Number(formData.chol),
      fbs: Number(formData.fbs),
      restecg: Number(formData.restecg),
      thalachh: Number(formData.thalachh),
      exng: Number(formData.exng),
      oldpeak: Number(formData.oldpeak),
      slp: Number(formData.slp),
      caa: Number(formData.caa),
      thall: Number(formData.thall),
    };

    try {
      const response = await axios.post('http://localhost:5000/predict', formattedData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction', error);
    }
  };
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded p-8">
        <h2 className="text-2xl font-bold mb-4">Formulario de Predicción de Ataque Cardíaco</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="age" className="mb-2">Edad:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Edad" required className="border p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="sex" className="mb-2">Género:</label>
            <select id="sex" name="sex" value={formData.sex} onChange={handleChange} className="border p-2 rounded">
              <option value="0">Femenino</option>
              <option value="1">Masculino</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="cp" className="mb-2">Tipo de Dolor en el Pecho:</label>
            <select id="cp" name="cp" value={formData.cp} onChange={handleChange} className="border p-2 rounded">
              <option value="0">Angina Típica</option>
              <option value="1">Angina Atípica</option>
              <option value="2">Dolor no Anginal</option>
              <option value="3">Asintomático</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="trtbps" className="mb-2">Presión Arterial en Reposo:</label>
            <input type="number" id="trtbps" name="trtbps" value={formData.trtbps} onChange={handleChange} placeholder="Presión Arterial en Reposo" required className="border p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="chol" className="mb-2">Colesterol:</label>
            <input type="number" id="chol" name="chol" value={formData.chol} onChange={handleChange} placeholder="Colesterol" required className="border p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="fbs" className="mb-2">Nivel de Azúcar en Sangre en Ayunas:</label>
            <select id="fbs" name="fbs" value={formData.fbs} onChange={handleChange} className="border p-2 rounded">
              <option value="0">Falso</option>
              <option value="1">Verdadero</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="restecg" className="mb-2">Resultado del Electrocardiograma en Reposo:</label>
            <select id="restecg" name="restecg" value={formData.restecg} onChange={handleChange} className="border p-2 rounded">
              <option value="0">Normal</option>
              <option value="1">Anormalidad de la onda ST-T</option>
              <option value="2">Hipertrofia Ventricular Izquierda</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="thalachh" className="mb-2">Ritmo Cardíaco Máximo:</label>
            <input type="number" id="thalachh" name="thalachh" value={formData.thalachh} onChange={handleChange} placeholder="Ritmo Cardíaco Máximo" required className="border p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="exng" className="mb-2">Angina Inducida por el Ejercicio:</label>
            <select id="exng" name="exng" value={formData.exng} onChange={handleChange} className="border p-2 rounded">
              <option value="0">No</option>
              <option value="1">Sí</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
      <label htmlFor="oldpeak" className="mb-2">Depresión del Segmento ST:</label>
      <input type="number" id="oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} placeholder="Depresión del ST" required className="border p-2 rounded" />
    </div>
    <div className="flex flex-col mb-4">
      <label htmlFor="slp" className="mb-2">Inclinación del Segmento ST:</label>
      <select id="slp" name="slp" value={formData.slp} onChange={handleChange} className="border p-2 rounded">
        <option value="0">Ascendente</option>
        <option value="1">Plano</option>
        <option value="2">Descendente</option>
      </select>
    </div>
    <div className="flex flex-col mb-4">
      <label htmlFor="caa" className="mb-2">Número de Vasos Principales:</label>
      <input type="number" id="caa" name="caa" value={formData.caa} onChange={handleChange} placeholder="Número de Vasos Principales" required className="border p-2 rounded" />
    </div>
    <div className="flex flex-col mb-4">
      <label htmlFor="thall" className="mb-2">Resultado de la Prueba de Estrés:</label>
      <select id="thall" name="thall" value={formData.thall} onChange={handleChange} className="border p-2 rounded">
        <option value="0">Nulo</option>
        <option value="1">Defecto Fijo</option>
        <option value="2">Defecto Reversible</option>
      </select>
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Predecir
    </button>
    </form>
    {prediction && <h3>{prediction}</h3>}
    </div>
    </div>
    );
    };

export default Form;
