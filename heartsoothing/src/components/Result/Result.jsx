import React from 'react';

const Result = ({ data }) => {
  return (
    <div className="mt-8 p-6 bg-[#1A202C] rounded-lg shadow-lg w-full max-w-lg text-center">
      <h2 className="text-2xl font-bold text-[#81E6D9] mb-4">Prediction Result</h2>
      <p className="text-lg text-gray-400">{data.result}</p>
    </div>
  );
};

export default Result;
