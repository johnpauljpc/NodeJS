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
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about-us.html'
            res.statusCode = 200;
            break;

            case 'about-me':
                res.statusCode = 301
                res.setHeader('Location', '/about')
                res.end()
            break;
        case '/contact':
            path += "contact-page.html"
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301
            res.setHeader('Location', '/contact')
            res.end()
            break;
        default:
            path +="404.html"
            res.statusCode = 404;
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