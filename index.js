const express = require('express')
const app = express();
app.get('/teste',(req,res)=>{
  return res.json({hello:"word"})
})

app.listen(3333)