const express = require('express');
var morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

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


// app.get('/add-blog', (req, res)=>{
//     // creating an instance
//     const blog = new Blog({
//         title:"Third post",
//         snippet:"A vlidator of Christ's resurrection",
//         body:"Let my life be a validator of God's power. Let me work in the reality of His purpose and calling for me.."

//     });

//     blog.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// // Retrieve data from the database
// app.get('/all-posts', (req, res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)

//     })
// })

// // find single record
// app.get('/single-record', (req, res)=>{
//     Blog.findById('6446e12141186af294767812')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.get('/', (req, res) =>{
    // res.send('<h1> Hello Guys, I love Express</h1>')
    // res.sendFile('./views/index.html', {root: __dirname})
    
    res.redirect('/blogs')
});

app.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'All Blogs', blogs:result} )
    })
    .catch((err)=>{
        console.log(err)
    })
})

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