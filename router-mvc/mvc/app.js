const express = require('express');
var morgan = require ('morgan')
const mongoose = require('mongoose')

const blogController = require('./controllers/blogController')

// const blogRoutes = require('./routes/blogRoutes')

const app = express();
 
// connect to mongodb
dbURI = 'mongodb+srv://johnpaul:08109137270@cluster0.5zkdvda.mongodb.net/blogDB?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(3000), console.log('db connected')
)
.catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')
app.set('views', 'myviews')



app.use(morgan('tiny'))
// Static middleware
app.use(express.static('static'))
app.use(express.urlencoded({extended : true}))


app.get('/blogs/:id', blogController.blog_detail)
app.get('/about', blogController.about)
app.get('/contact', blogController.contact)
app.get('/create/post', blogController.blog_create_get)
app.get('/', blogController.blog_index)
app.post('/', blogController.blog_create_post)


app.delete('/blogs/:id', blogController.blog_delete)






// Redirects
app.get('/about-me', (req, res) =>{
    res.redirect('/about')
});

app.get('/contact-us', (req, res) =>{
    res.redirect('/contact')
})



// BLOG Routes
app.get('/', (req, res) =>{
    
    res.redirect('/blogs')
});

// app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: "404"})
})