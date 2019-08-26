// This is the server
// This can host static files [e.g. Index.html]
// Save information to database, retrieve and send data to the client
// Authentication
// The client has no access to this index.JS file.  The code is hidden

// Simple website request, index.html file is sent. However if the index.html
// has JS files or references to JS files or ton of different medias. RAW text is sent instead and get executed at client PC

// Access to Node Express package, I need to request it
const express = require('express');
const app = express(); // whole express library saved into app.

// Start listerning 
app.listen(3000, () => console.log('listerning at 3000'));

// Start serving web pages
// Create a folder for handling public information and move content into it. -> Index.html
app.use(express.static('public'))