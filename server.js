// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Replace with your financial data API endpoint and key
const API_URL = 'https://financialdataapi.com/api/v1/stock';
const API_KEY = 'your_api_key';

app.get('/api/unusual-volume', async (req, res) => {
  try {
    const { symbol } = req.query;
    const response = await axios.get(`${API_URL}/${symbol}/volume`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    const data = response.data;
    const currentVolume = data.currentVolume;
    const averageVolume = data.averageVolume;

    const isUnusual = currentVolume > averageVolume * 1.5; // Example threshold

    res.json({ symbol, currentVolume, averageVolume, isUnusual });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});