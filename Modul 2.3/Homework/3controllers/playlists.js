import { getAllPlaylistWithArtist, getPlaylistWithArtistsById, playSongFromPlaylist, addSongToPlaylist, topSong } from "../2usecases/playlists.js";


export const getAllSong = (req, res)=>{
  
  const playlist = getAllPlaylistWithArtist();

  return(res.json(playlist))
}

export const getSongById = (req, res)=>{
  const {id} = req.params
  const getSong = getPlaylistWithArtistsById(id);
  if(!getSong){
    res.status(404).json({"message":"Song not found!"})
  }
  return(res.json(getSong))
}

export const playASong=(req, res)=>{
  const {id} = req.params
  const playSong = playSongFromPlaylist(id)
  if(!playSong){
    res.status(404).json({"message":"Song not found!"})
    return
  }
  return(res.json(playSong))
}

export const addNewSong = (req, res) => {
  const {title, url, artists} = req.body
  if(!title || !url|| !artists){
    return (res.json({"message":"Data url or title or artists is not found"}))
  }
  if(typeof artists != 'object'){
    return res.json({"message":"Artists' type is array"})
  }
  const addSong = addSongToPlaylist(title,url, artists)
  return(res.json({addSong}))
}

export const trend = (req, res)=>{
  return res.json(topSong())
}