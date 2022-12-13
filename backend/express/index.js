const express=require('express') // requiring the express file
const app=express() //using express function to create a serverrrrrr
// app.use((req,res)=>{
// res.send('<H1>YOU ARE GETTING THE THINGS BABY</H1>')
// })
// app.get('/',(req,res)=>{
//     res.send('<h1>server connext</h1>')
// })
// iiii
// app.get('/cats',(req,res)=>{
//     res.send('<h1>meowwww</h1>')
// })
// app.get('/dogs',(req,res)=>{
//     res.send('<h1>bark</h1>')
// })
// app.get('*',(req,res)=>{
//     res.send('<h1>hanjii kida sohneo</h1>')
// }) // basically a end point if we dont create any path that is it
// // is not matching with url
// app.get('/r/dogs',(req,res)=>{
//     res.send('<h1>woof</h1>')
// })
// app.get('/r/cats',(req,res)=>{
//     res.send('<h1>meoww</h1>')
// })
app.get('/r/:subreddit'/*this is path paaramter*/,(req,res)=>{
//console.log(req.params);
const {subreddit}=req.params
   // res.send('<h1>this is a subreddit</h1>')
   res.send(`this is ${subreddit} a subreddit`)
})

// app.post('/dog',(req,res)=>{
//     res.send('this is a post request')
// })
app.get('/user/:userid/carts/:productid',(req,res)=>{
    console.log(req.params)
    res.send('user route')
})
app.get('/search',(req,res)=>{
    const {q}=req.query
    res.send(`you are trying to serach for ${q}`)
    //console.log(req.query)
})

app.listen(3000,()=>{
    console.log('server is listening to the port 3000')
})
