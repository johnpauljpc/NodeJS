const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    snippet:{
        type:String,
        required: true
    },

    body:{
        type:String,
        required: true
    }
}, {Timestamp:true}
);

const Blog = mongoose.model('blogDB', blogSchema)

module.exports = Blog;