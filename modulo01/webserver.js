//server web
const http = require('http')
const url = require('url')
const fs = require('fs');
const replaceTemplate = require('./modulos/replaceTemplate')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const tempOverView = fs.readFileSync(`${__dirname}/template/overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/template/product.html`,'utf-8');
const tempCart = fs.readFileSync(`${__dirname}/template/template-cart.html`,'utf-8');
const dataObject = JSON.parse(data); 
 

//cria o servidor
const server = http.createServer((req,res)=>{
  //rotas
  const {pathname,query} = url.parse(req.url, true)
  console.log()
  if(pathname === "/" || pathname === '/overview'){
    res.writeHead(200,{'Content-type':'text/html'})   

    const cardsHtml = dataObject.map(el=>replaceTemplate(tempCart,el)).join('')
    const output = tempOverView.replace(/{%PRODUCTS_CARDS%}/g,cardsHtml)
    res.end(output)
  }else if(pathname === "/product"){
    const product = dataObject[query.id];
    res.writeHead(200,{'Content-type':'text/html'})
    const output = replaceTemplate(tempProduct,product)
    res.end(output)

  }else if(pathname === "/api"){
    res.writeHead(200,{'Content-type':'application/json'})        
    res.end(data)
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
