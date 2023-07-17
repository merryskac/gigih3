import Express from 'express'
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

app.get('/user/:id',(req,res)=>{
  const id = req.params.id;
  const user = users.filter((user)=>{
    return user.id === Number(id)
  })
  if(user.length<1){
    return res.status(404).json({
      message:"Data not found"
    })
  }

  res.json({
    data:user
  })
})

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