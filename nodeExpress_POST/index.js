const express = require('express');
const app = express();

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
    //  console.log(request); // View the request message
    //  To view the request's body where the real data exist.

    console.log(request.body);
    const data = request.body;
    allData.push(data);
    
    // Sending a response back
    // response.end();
        response.json({
            status: 'sucess',
            latitude: data.lat,
            longitude: data.lon,
            secondmess: data.POSTmessage,
            allData,
        });
    // To parse any data coming in as JSON. We need to use express.json([options])

    
});
// npm install -g nodemon to automatic starting/restarting the server