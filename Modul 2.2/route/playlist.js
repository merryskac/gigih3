import Express from 'express'
const router = Express.Router()
import playlist from '../playlist.json' assert {type: 'json'}

router.get('/', (req, res)=>{
  res.json(playlist);
})

router.post('/',(req, res)=>{
  const title = req.body.title;
  const artists = req.body.artists;
  const url = req.body.url;

  console.log(req.body);

  if(title === undefined || artists === undefined || url===undefined){
    res.status(200).json({
      "message": "data not complete"
    })
    return;
  }
  const song = {
    id: playlist.length+1,
    title: title,
    artists:artists,
    url:url
  }
  playlist.push(song)
  res.json({
    "message": "insert to playlist success",
    "data": song
  })

})

router.get('/:id',(req,res)=>{
  const id = Number(req.params.id) ;
  const song = playlist.find(song => song.id === id)
  if(song.length < 1){
    res.status(404).json({
      "message": "Song not found"
    })
    return
  }
  res.status(200).json({
    'data': song
  })
})

export {router}

