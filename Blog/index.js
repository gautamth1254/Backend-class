const express =require('express');
const { request } = require('http');
const { resolve } = require('path');
//const { request } = require('http');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid')
const methodOverride = require('method-override');


// override the post by deleted or update

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}))

let comments = [
    {
        id:uuid(),
        username:'Gautam',
        comments: 'hello form gautam'
    },
    {
        id:uuid(),
        username:'cat',
        comments: 'hello form cat'
    },
    // {
    //     id:uuid(),
    //     username:'dog',
    //     comments: 'hello form dog'
    // },
    // {
    //     id:uuid(),
    //     username:'car',
    //     comments: 'hello form Car'
    // }
]

app.get('/',(req, res) => {
    res.render('blog')
    //res.send("server is listening");
})


app.get('/comments',(req,res)=> {
    res.render('index',{comments});
});

app.get('/comments/new',(req,res)=>{
    res.render('new');
})

app.post('/comments',(req,res)=>{
    // console.log(req.body)

    const newComment = {
        // id:comments.length,
        id:uuid(),
        ...req.body
    }
    comments.push(newComment)
    // res.send('New Comment Route')
    res.redirect('/comments')
})

//link ke through id comment

//// Show

app.get('/comments/:id',(req,res)=> {
    const {id} = req.params
    const foundContent = comments.find((c) => c.id===(id))
    res.render('show',{foundContent});
})


/// Edit

app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params
    const foundContent = comments.find((c) => c.id===(id))  // id comment username
    res.render('edit',{foundContent})
})

app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params
    const updatedContent = req.body.comments
    //console.log(req.body)
    const foundContent = comments.find((c) => c.id===(id))  // id comment username
    foundContent.comments=updatedContent
    res.redirect('/comments')
    // res.render('edit',{foundContent})
    //res.send('you send  a patch req')
})

app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params
    
    const newComments = comments.filter((c) => c.id!==id)   // store new array 
    comments = newComments // updateing my original comments with new comments
    res.redirect('/comments')
})

app.listen(2323,()=> {
    console.log("server is listening to the port");
    //redirect
});