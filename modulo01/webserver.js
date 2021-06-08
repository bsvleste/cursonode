//server web
const http = require('http')
const url = require('url')
//cria o servidor
const server = http.createServer((req,res)=>{
  //rotas
  const pathName = req.url;
  if(pathName === "/" || pathName === '/overview'){
    res.end("This is the OVERVIEW")
  }else if(pathName === "/product"){
    res.end("This is the product page")
  }else{
    res.writeHead(404,{
      "Content-type":"text/html",
      "my-own-header":"Hello word"
    })
    res.end("<h1>Page not found</h1>")
  }
});

//inicializa o servidor
server.listen(3333,'127.0.0.1',()=>{
  console.log("Estamos on line 🤡")})
