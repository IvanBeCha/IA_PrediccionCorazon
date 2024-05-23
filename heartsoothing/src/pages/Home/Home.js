import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
import { getPrediction } from '../../utils/api';
import './Home.css';

const Home = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (data) => {
    const prediction = await getPrediction(data);
    setResult(prediction);
  };

  return (
    <div className="home container">
      <h1>Heart Attack Prediction</h1>
      <p>Ingresa tus datos para predecir el riesgo de infarto utilizando nuestra IA.</p>
      <Form onSubmit={handleFormSubmit} />
      {result && <Result data={result} />}
    </div>
  );
};

export default Home;
