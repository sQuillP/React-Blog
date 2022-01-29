let mongoose = require('mongoose');
let authorSchema = require('./Author').schema;




let commentSchema = new mongoose.Schema({
    author: authorSchema,
    comment: String
});

let Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;