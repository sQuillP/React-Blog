let mongoose = require('mongoose');
let authorSchema = require('./Author').schema;
let commentSchema = require('./Comment').schema;

let postSchema = new mongoose.Schema({
    title: String,
    author: authorSchema,
    image: String,
    content: String,
    comments: [commentSchema]
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;