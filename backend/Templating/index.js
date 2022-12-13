const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs') //mentioning which template engine which er are using
app.get('/temp',(req,res)=>{
    res.render('home')
})
app.set('views',path.join(__dirname,'views'))
app.get('/ran',(req,res)=>{
const rNum=Math.floor(Math.random()*100)
    res.render('random',{rNum})
})
const todos=['go shoopinb','bhawna','chetan']
app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})
app.use(express.static(path.join(__dirname,'public')))

app.listen(2323,()=>{
    console.log("server listened to port")
})