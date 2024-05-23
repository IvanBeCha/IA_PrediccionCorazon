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
    <div>
      <h2>Heart Attack Prediction Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>
        <select name="cp" value={formData.cp} onChange={handleChange}>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </select>
        <input type="number" name="trtbps" value={formData.trtbps} onChange={handleChange} placeholder="Resting Blood Pressure" required />
        <input type="number" name="chol" value={formData.chol} onChange={handleChange} placeholder="Cholesterol" required />
        <select name="fbs" value={formData.fbs} onChange={handleChange}>
          <option value="0">False</option>
          <option value="1">True</option>
        </select>
        <select name="restecg" value={formData.restecg} onChange={handleChange}>
          <option value="0">Normal</option>
          <option value="1">ST-T wave abnormality</option>
          <option value="2">Left ventricular hypertrophy</option>
        </select>
        <input type="number" name="thalachh" value={formData.thalachh} onChange={handleChange} placeholder="Max Heart Rate" required />
        <select name="exng" value={formData.exng} onChange={handleChange}>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
        <input type="number" name="oldpeak" value={formData.oldpeak} onChange={handleChange} placeholder="Oldpeak" required />
        <select name="slp" value={formData.slp} onChange={handleChange}>
          <option value="0">Upsloping</option>
          <option value="1">Flat</option>
          <option value="2">Downsloping</option>
        </select>
        <input type="number" name="caa" value={formData.caa} onChange={handleChange} placeholder="Number of Major Vessels" required />
        <select name="thall" value={formData.thall} onChange={handleChange}>
          <option value="0">Null</option>
          <option value="1">Fixed defect</option>
          <option value="2">Reversible defect</option>
        </select>
        <button type="submit">Predict</button>
      </form>
      {prediction && <h3>{prediction}</h3>}
    </div>
  );
};

export default Form;
