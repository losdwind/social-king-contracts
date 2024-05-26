const fs = require('fs');

// Read the content of twitter-authentication.js and convert it to a string
const filePath = './twitter-authentication.js';
try {
  const fileContent = fs.readFileSync(filePath, 'utf8').toString(); // 'utf8' encoding to directly get the string
  console.log(fileContent);
} catch (err) {
  console.error('Error reading file:', err);
}
