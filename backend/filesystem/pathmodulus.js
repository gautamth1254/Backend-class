const path=require('path');
const fs=require('fs')
//console.log(path.join('filesystem','Files','index.js'));
// console.log(process.cwd())
// console.log(__dirname)
const F1=path.join(__dirname,'Files/xyz.txt')
fs.writeFile(F1,'heello from the file system',{encoding:'utf-8',flag:'w'},(err)=>{
    if(err) throw err;
    console.log('file writeen sucessfully')
    })