export const getPrediction = async (data) => {
  try {
      const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching prediction:', error);
      return null;
  }
};

// Example usage
const data1 = {
  age: 63,
  sex: 1,
  cp: 3,
  trtbps: 145,
  chol: 233,
  fbs: 1,
  restecg: 0,
  thalachh: 150,
  exng: 0,
  oldpeak: 2.3,
  slp: 0,
  caa: 0,
  thall: 1
};

const data2 = {
  age: 45,
  sex: 0,
  cp: 2,
  trtbps: 120,
  chol: 220,
  fbs: 0,
  restecg: 1,
  thalachh: 140,
  exng: 1,
  oldpeak: 1.5,
  slp: 1,
  caa: 1,
  thall: 2
};

getPrediction(data1).then(result => console.log(result));
getPrediction(data2).then(result => console.log(result));
  