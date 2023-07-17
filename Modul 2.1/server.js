import Http from "http"


const server = Http.createServer((req,res)=>{
  res.setHeader("Content-type", "text/plain");

  if(req.url === "/"){
    res.statusCode = 200;
    res.end("index page")
  }else if(req.url === "/about"){
    res.statusCode = 200
    res.end("about page");
  }else{
    res.statusCode = 404;
    res.end("Page not found")
  }
})

server.listen(3000,()=>{
  console.log("server on [ort 3000")
})