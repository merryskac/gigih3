import Express from 'express'
import {router} from './route/playlist.js';
import bodyParser from 'body-parser'

const app = Express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(Express.json())

app.use('/playlist',router)

app.listen(3000, ()=>{
  console.log('running on port 3000')
})