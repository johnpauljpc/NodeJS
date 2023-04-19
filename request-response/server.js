// const { server } = require('live-server')
fs = require('fs')
http = require('http')

server = http.createServer((req, res)=>{
    console.log('server requested')
    console.log(req.url, req.method)

    // Returning HTML pages
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('c./views/index.html', (err, data)=>{
        if(err){
            console.log("something is wrong: ",err)
            res.write('some thing is wrong!')
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(4000, 'localhost', ()=>{
    console.log('listenning on port 4000...')

}
)