const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Your Gemini API key
const GEMINI_API_KEY = 'AIzaSyAvMcj3QNj7Ts5rf50wR0XzOPr7xy7JwoA';

// Example route to interact with Gemini AI
app.post('/get-response', async (req, res) => {
  try {
    const response = await axios.post('https://gemini.api.endpoint/v1/chat/completions', {
      // Replace this with the actual format Gemini expects
      messages: [
        { role: 'user', content: 'What is the capital of France?' }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${GEMINI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // Send Gemini's response to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Gemini response:', error);
    res.status(500).json({ error: 'There was an error fetching the response.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
