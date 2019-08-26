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
app.use(express.json( {limit: '1mb'})); // https://expressjs.com/en/api.html to explore options i can put in

        // Routing in Expressing [Post or GET]
        // https://expressjs.com/en/guide/routing.html
        // JSON Parsing so that when the Route receieves data, it is able to understand it as a JSON file, making it readable
        

const allData = [];        
//  Post method route
//  Specify address, and a call back function to look at the request and provide a response

app.post('/api', (request, response) =>{
   // console.log(request); // View the request message
    // To view the request's body where the real data exist.
    console.log('I GOT A REQUEST');
    // console.log(request);
    console.log(request.body);
    const data = request.body;
    allData.push(data);


    // console.log(request.body.lat);
    // Sending a response back
    // response.end();
        response.json({
            status: 'sucess',
            message : 'i got u fam, i got your location',
            
            latitude: data.lat,
            longitude: data.lon,
            secondmess: data.POSTmessage,
            allData,
        });
    // To parse any data coming in as JSON. We need to use express.json([options])

    
});

// npm install -g nodemon