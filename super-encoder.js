// encryptors functions

const encryptors = require('./encryptors1.js')
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

const encodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), 8); 
};

const decodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, -8)));
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);