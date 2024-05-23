export const getPrediction = async (data) => {
    try {
      const response = await fetch('https://tu-api-de-ia.com/predict', {
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
  