
const http = require('http')
// require fs for managing file handling and reading files
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    /*
    -> instead of responding with plain text. This will respond with a HTML
    1. specify to browser, that we are writing HTML and should parse it as HTML document
    */

    /* writeHead writes the HTTP header of the response, 200 is the status code for everything went fine/OK
    writeHead's next parameters are the headers we want to set
    */
    res.writeHead(200, {'Content-Type': 'text/html'}) 
    // 2. read  the html file.
    fs.readFile('index.html', function(error, data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            // 3. Write the data. This is all the information in our HTML file
            res.write(data)
        }
        res.end() // Writes the body and signals to the server that the the response (header and content) has been sent completely
    })
})

server.listen(port, function(error){
if (error) {
    console.log('Something went wrong',error)
} else {
    console.log('Server is listerning on port '  + port)
}
})
