import bodyParser from "body-parser";
import express  from "express";
import router from "./4routes/playlist/router.js";
const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
  res.send('haloo')
})

app.use('/playlist', router)

app.listen(3000,()=>{
  console.log('server is open')
})

