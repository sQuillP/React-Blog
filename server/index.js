const express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
Comment = require('./models/Comment'),
Author = require('./models/Author'),
Post = require('./models/Post')
PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/blog-app')
.catch(err=>console.log(err));


app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/blogs',async (req,res)=>{
    const posts = await Post.find({});
    res.json(posts);
});


app.get('/blogs/:id',async (req,res)=>{
    const post = await Post.findById(req.params.id);
    if(post == null) return;
    res.json(post);
});


app.put('/updateBlog', async (req,res)=>{
    const id = req.body._id;
    console.log(req.body);
    const update = await Post.findByIdAndUpdate(id, req.body);
    res.json(update);
})

app.post('/createblog',(req,res)=>{
    const data = new Post(req.body);
    console.log(data);
    data.save((err,doc)=>{
        if(err)
            console.log(err)
        else
            console.log('save successful');
    });
});




app.listen(PORT,()=>{
    console.log('server has started');
});