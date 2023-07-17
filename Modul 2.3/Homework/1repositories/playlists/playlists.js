import playlistData from './json/playlist.json' assert {type: "json"}
import {v4 as uuid} from 'uuid'

export const getPlaylistById = (id)=>{
  const playlistsById = playlistData.find(playlist => playlist.id === String(id))

  return playlistsById
}

export const getAllPlaylist = () =>{
  return playlistData
}
// console.log(playlistData)

export const addToPlaylist = (title, url, artists)=>{
  const song = {
    id: uuid(),
    title: title,
    artists: artists,
    url: url,
    hitCount: 0
  }

  playlistData.push(song)
  return song
}

export const updateHitCount=(id)=>{
  const data = playlistData.find(song => song.id === id)
  return data.hitCount += 1
}

export const topSongs = () =>{
  const data = playlistData.sort((a, b)=>b.hitCount - a.hitCount)
  return data
}
