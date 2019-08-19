/*
Node JS is a runtime environment for executing JavaScript outside the browser
This can be 
-> Desktop Apps
-> Servers
-> Anything else you want to run with JavaScript
*/

// [Create a Web server using Node JS]

// First, create our server and then start listerning. 
// 1. require HTTP library to start the server. 
const http = require('http')
// 2. Specify what port we listen to
const port = 3000

// -> Create our server
// 3. use the HTTP Library that was imported & use the createServer function(Request and response parameters)
const server = http.createServer(function(req,res){
    // response object is used to return some response to the user
    res.write('Hello Node')
    // end the Response
    res.end()
})

// 4. set up the server to listen to the port
// 5. specifiy the port and the error catching 
server.listen(port, function(error){
if (error) {
    console.log('Something went wrong',error)
} else {
    console.log('Server is listerning on port '  + port)
}
})

// 6. run the server. Terminal + cd file location + "node (filename).js"
// Ctrl + C to end the server