const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});