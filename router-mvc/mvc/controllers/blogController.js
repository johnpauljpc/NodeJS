// const express = require('express')
const Blog = require('../models/blog')

const blog_index = ((req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'All Blogs', blogs:result} )
    })
    .catch((error)=>{
        console.log(error)
    })
})


const blog_detail = ((req, res) =>{
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

const about = ((req, res)=>{
    res.render('about', {title: 'about'})
})

const contact = ((req, res)=>{
    res.render('contact', {title: 'contact'})
})

const blog_create_get = ((req, res)=>{
    res.render('createPost', {title: 'create post'})
})

blog_create_post= ((req, res)=>{
    const blog = new Blog(req.body)

    blog.save()
    .then((result) =>{
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
    })

})


blog_delete = ((req, res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect:'/'})
    })
    .catch(err=>{
        console.log(err)
    })
})



module.exports = {
    blog_index,
    blog_detail,
    about,
    contact,
    blog_create_get, blog_delete, blog_create_post
}