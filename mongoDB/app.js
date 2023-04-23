const express = require('express');
var morgan = require('morgan')

const app = express();

// register view engine
app.set('view engine', 'ejs')
app.set('views', 'myviews')

app.listen(3000);

app.use(morgan('tiny'))
// Static middleware
app.use(express.static('static'))



app.get('/', (req, res) =>{
    // res.send('<h1> Hello Guys, I love Express</h1>')
    // res.sendFile('./views/index.html', {root: __dirname})
    const blogs = [
        {title: "Post 1", 
        snippet: "help me lord help me lord help me lord help me lord help me lord"
        },

        {title: "Post 2", 
        snippet: "help me lord help me lord help me lord help me lord help me lord"
        }
    ]
    res.render('index', {title: 'home', blogs})
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'about'})
})

app.get('/contact', (req, res)=>{
    res.render('contact', {title: 'contact'})
})

app.get('/blogs/create/', (req, res)=>{
    res.render('create-post', {title: 'create post'})
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
    res.status(404).render('404', {title: "404"})
})