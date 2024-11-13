npm install express axios cors
// index.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/your-proxy-endpoint', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/endpoint'); // Replace with your target API
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error while fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
