let mongoose = require('mongoose');


let authorSchema = new mongoose.Schema({
    name:String,
    image: String
});



const Author = mongoose.model('Author',authorSchema);


module.exports = Author;