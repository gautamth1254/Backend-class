const express =require('express');

const app = express();

app.set('view engine', 'ejs');

app.set('views',__dirname + '/views') //will concatinate

app.use('/',express.static(__dirname + '/public')); // serving static files  // app.use me static file use

app.use(express.urlencoded({extended:true}))

const todos=['GO TO GYM','GO TO HOME','WATCH WEB SERIES','Learn web'];

app.get('/todo', (req, res)=>{
    if(req.xhr){
        console.log("ajax request")
        res.status(200).json(todos)
    }else{
        console.log("normal request");
        res.render('todo',{todos})
    }
    //res.send("hello from server");
});

app.post('/todo',(req, res)=>{
    const {todo} = req.body
    todos.push(todo)
    console.log(req.body);
    //res.send("Post request")
    res.redirect('/todo')
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})