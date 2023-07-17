import express from 'express';
import { addNewSong, getAllSong, getSongById, playASong, trend } from '../../3controllers/playlists.js';
const router = express.Router();

router.use(express.json())

router.get('/',(req,res)=>{
  res.json({"ket": 'haloo'})
})

router.get('/allSongs', getAllSong)

router.get('/songById/:id', getSongById)

router.get('/playSong/:id', playASong)

router.post('/addNewSong', addNewSong)

router.get('/trends', trend)

router.use((req,res)=>{
  res.json({'message':'Address not found'})
})

export default router