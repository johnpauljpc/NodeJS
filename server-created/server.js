const http = require('http');

server = http.createServer((req, res) =>{
    // req = request
    // res response
    console.log(req.url, req.method)
    // set header content type
    
    res.setHeader('content-type', 'text/plain')

   
    res.write('Hello, Johnpaul-JP');
    res.end()
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000')
})