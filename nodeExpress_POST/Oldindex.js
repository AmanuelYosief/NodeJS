const express = require('express');
const app = express();
app.listen(3000, () => console.log('listerning at 3000'));
// Start serving web pages
// Create a folder for handling public information and move content into it. -> Index.html
app.use(express.static('public'))