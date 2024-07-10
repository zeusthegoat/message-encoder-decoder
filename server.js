const express = require('express');
const bodyParser = require('body-parser');
const encryptors = require('./encryptors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/encode', (req, res) => {
  const { message, type } = req.body;
  let encodedMessage;

  switch (type) {
    case 'caesar':
      encodedMessage = encryptors.caesarCipher(message, 8); // Adjust shift as needed
      break;
    case 'symbol':
      encodedMessage = encryptors.symbolCipher(message);
      break;
    case 'reverse':
      encodedMessage = encryptors.reverseCipher(message);
      break;
    default:
      encodedMessage = 'Invalid encryption type';
  }

  res.json({ encoded: encodedMessage });
});

app.post('/decode', (req, res) => {
  const { message, type } = req.body;
  let decodedMessage;

  switch (type) {
    case 'caesar':
      decodedMessage = encryptors.caesarCipher(message, -8); // Adjust shift as needed
      break;
    case 'symbol':
      decodedMessage = encryptors.symbolCipher(message); // Assuming symmetric encryption
      break;
    case 'reverse':
      decodedMessage = encryptors.reverseCipher(message);
      break;
    default:
      decodedMessage = 'Invalid decryption type';
  }

  res.json({ decoded: decodedMessage });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
