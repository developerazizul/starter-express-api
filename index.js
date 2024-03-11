const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const token = '6798109809:AAGFBeNDU0HhSMRFmYPHOikhslmNmIVeeHQ';
  const chatId = '644834302';
  const message = 'Hello, world!';

  const url = `https://api.telegram.org/bot6798109809:AAGFBeNDU0HhSMRFmYPHOikhslmNmIVeeHQ/sendMessage`;
  const params = new URLSearchParams({
    chat_id: chatId,
    text: message
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
