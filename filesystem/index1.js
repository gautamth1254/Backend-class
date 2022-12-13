const fs=require('fs')
//for writing a file
// fs.writeFile('abc.txt','heello from the file system',{encoding:'utf-8',flag:'w'},(err)=>{
// if(err) throw err;
// console.log('file writeen sucessfully')
// })

//for reading a file
// fs.readFile('abc.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

//for deleteing a file
// fs.unlink('abc.txt',(err)=>{
//     if(err) throw err;
//     console.log('file deleted scessdully');
// })

//for append in a file
fs.appendFile('abc.txt','data to append',(err)=>{
    if(err) throw err;
    console.log('THE DATA TO APPEND"APPENDING IN FIlE"');
})
