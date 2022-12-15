const express =require('express');

const app = express();

app.set('view engine', 'ejs');

app.set('views',__dirname + '/views') //will concatinate

app.use('/',express.static(__dirname + '/public')); // serving static files  // app.use me static file use

const todos=['GO TO GYM','GO TO HOME','WATCH WEB SERIES','Learn web' ];

app.get('/todo', function(req, res){
    if(req.xhr){
        console.log("ajax request")
        res.status(200).json(todos)
    }else{
        console.log("normal request");
        res.render('todo',{todos})
    }
    //res.send("hello from server");
});

app.listen(5000,()=>{
    console.log('listening on port 5000')
})