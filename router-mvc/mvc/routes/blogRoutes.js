const express = require('express')
const Blog = require('../models/blog')
const router = express.Router()






router.get('/', (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'All Blogs', blogs:result} )
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.post('/', (req, res)=>{
    const blog = new Blog(req.body)

    blog.save()
    .then((result) =>{
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
    })

})


// get single record
router.get('/:id', (req, res)=>{
    const id = req.params.id
    console.log('>>>>   ' + id)
    Blog.findById(id)
    .then(result =>{
        res.render('details', {blog: result, title:"Blog Detail"})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect:'/'})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router;