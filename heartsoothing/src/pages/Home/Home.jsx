import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
import { getPrediction } from '../../utils/api';

const Home = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (data) => {
    const prediction = await getPrediction(data);
    setResult(prediction);
  };

  return (
    <div className="flex flex-col items-center justify-center text-black mb-20">
      <h1 className="text-4xl font-bold mb-6 text-[#81E6D9]">Heart Attack Prediction</h1>
      <p className="text-lg mb-8 text-gray-400">Ingresa tus datos para predecir el riesgo de infarto utilizando nuestra IA.</p>
      <Form onSubmit={handleFormSubmit} />
      {result && <Result data={result} />}
    </div>
  );
};

export default Home;
