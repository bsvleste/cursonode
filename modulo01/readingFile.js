//BIBLIOTECA FS
const fs = require('fs')
//BLOCKING , SYNCHRONOUS WAY
/* 
const txtIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(txtIn);
//inserindo texto no arquvo
const txtOut = `${txtIn},inserindo texto em arquivos.\nCreated at on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',txtOut);
console.log("File written") */

//NO-BLOCKING ,ASYNCHRONOUS AWAY
fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
  fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
      console.log(data2);
    fs.readFile(`./txt/input.txt`,'utf-8',(err,data3)=>{
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8',err=>{
        console.log("your file has been written 😊 ")
      })
    });
  });
});
console.log(">>>>>>>.")