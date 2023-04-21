const express = require('express');

const app = express();

app.listen(3000);


app.get('/', (req, res) =>{
    // res.send('<h1> Hello Guys, I love Express</h1>')
    res.sendFile('./views/index.html', {root: __dirname})
});

app.get('/about', (req, res)=>{
    res.sendFile('./views/about-us.html', {root:__dirname})
})

app.get('/contact', (req, res)=>{
    res.sendFile('./views/contact-page.html', {root:__dirname})
})

// Redirects
app.get('/about-me', (req, res) =>{
    res.redirect('/about')
});

app.get('/contact-us', (req, res) =>{
    res.redirect('/contact')
})


// 404 page
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname})
})