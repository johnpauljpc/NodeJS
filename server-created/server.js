const http = require('http');

server = http.createServer((req, res) =>{
    // req = request
    // res response
    console.log(req.url, req.method)
    // set header content type
    
    res.setHeader('content-type', 'text/html')

    res.write('<meta name="color-scheme" content="dark"></meta>')
    res.write('<h3>Hello, Johnpaul-JP</h3>');
    res.end()
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000')
})