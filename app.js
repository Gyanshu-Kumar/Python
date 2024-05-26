const express = require('express');
const { GeneralChat } = require('@chaingpt/generalchat');

const app = express();
const PORT = 3000;

const generalchat = new GeneralChat({
  apiKey: '7fe82afd-50be-48e9-80dd-1ac4e77caa8d',
});

app.get('/chat', async (req, res) => {
  try {
    const stream = await generalchat.createChatStream({
      question: req.query.question || '',
      chatHistory: 'off'
    });

    res.setHeader('Content-Type', 'text/plain');

    stream.on('data', (chunk) => res.write(chunk.toString()));
    stream.on('end', () => res.end('Stream ended'));
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
