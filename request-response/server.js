// const { server } = require('live-server')
fs = require('fs')
http = require('http')

server = http.createServer((req, res)=>{
    console.log('server requested')
    console.log(req.url, req.method)

    // Returning HTML pages
    res.setHeader('Content-Type', 'text/html')
    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about-us.html'
            break;
        case '/contact':
            path += "contact-page.html"
            break;
        default:
            path +="404.html"
            break;
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log("something is wrong: ",err)
            res.write('some thing is wrong!')
            res.end()
        }
        else{
            res.end(data)
        }
    })
})

server.listen(4000, 'localhost', ()=>{
    console.log('listenning on port 4000...')

}
)