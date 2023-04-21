const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs')
app.set('views', 'myviews')

app.listen(3000);


app.get('/', (req, res) =>{
    // res.send('<h1> Hello Guys, I love Express</h1>')
    // res.sendFile('./views/index.html', {root: __dirname})
    res.render('index')
});

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.get('/blogs/create/', (req, res)=>{
    res.render('create-post')
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
    res.status(404).render('404')
})