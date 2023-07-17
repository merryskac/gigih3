import { getArtistById, getArtistIdByName } from "../1repositories/artists/artists.js";
import { addToPlaylist, getAllPlaylist, getPlaylistById, topSongs, updateHitCount } from "../1repositories/playlists/playlists.js"

export const getPlaylistWithArtistsById=(id)=>{
  const playlist = getPlaylistById(id);

  if(!playlist){
    return null;
  }

  const getArtists = playlist.artists.map(artistId => getArtistById(artistId)
  );

  return{...playlist, artists: getArtists}
}
 

export const playSongFromPlaylist=(id)=>{
const playSong = getPlaylistById(id);
if(!playSong){
  return null;
}
const addHitCount = updateHitCount(id)
return {...playSong, hitCount:addHitCount}
}

export const getAllPlaylistWithArtist = () =>{
const playlists = getAllPlaylist();
const getArtistsName = playlists
.map(data=>{
  const artists = data.artists
  .map(id=>getArtistById(id))
  return({...data, artists: artists})
})
return getArtistsName
}

export const addSongToPlaylist = (title, url, artistsId) =>{
  try{
  const check = artistsId.map(artist => {
    const check = getArtistById(artist)
    if(check === undefined){
      throw Error(`Artist id ${artist} not found`)
    }

  })
  return addToPlaylist(title, url, artistsId)

  }catch(e){
    return(e.message)
  }
  
}

export const topSong = () =>{
  const top5 = topSongs().slice(0,5)
  return top5;
}


