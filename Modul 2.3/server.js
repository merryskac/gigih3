import Express from 'express'
import { getDetailedUser } from './controller/rest/users.js';
import users from './users.json' assert {type: 'json'}

const app = Express();



app.get('/', (req, res)=>{
  res.json({
    message: "GET Request"
  })
})

app.post('/', (req, res)=>{
  res.json({
    message: "post Request"
  })
})

app.put('/', (req, res)=>{
  res.json({
    message: "put Request"
  })
})

app.delete('/', (req, res)=>{
  res.json({
    message: "delete Request"
  })
})

app.get('/about',(req,res)=>{
  res.json({
    data: "ABOUT GET"
  })
})

app.get('/users/:email',(req,res)=>{
  res.json({
    data: "ABOUT GET",
    email: req.params.email
  })
})

app.get('/user/:id',getDetailedUser)

app.get('/users',(req,res)=>{
  const {authorization} = req.headers
  if(authorization === "anris"){
    res.json({
      message:"Allowed"
    })
    
  }else{
    res.json({
      message:"Forbidden to access"
    })
  }
})

app.listen(3000, ()=>{
  console.log("Server On")
})