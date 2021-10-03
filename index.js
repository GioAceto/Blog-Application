const express = require('express');
const app = express();

app.use(express.static('public'));

PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})