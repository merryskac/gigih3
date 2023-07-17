import artistsData from "./json/artists.json" assert {type: "json"}
import {v4 as uuid} from 'uuid'

export const getArtistById=(id)=>{
  const artistById = artistsData.find(artist => artist.id === String(id));

  return artistById;
}


export const addArtist=(name, verified)=>{
  if(!name){
    throw Error("Name is not valid");
  }
  if(!verified){
    throw Error("verified status is not valid");
  }

  const newArtist={
    id : uuid(),
    name: name,
    verified: verified
  }

  artistsData.push(newArtist);
  return newArtist

}

export const getArtistIdByName=(artists) =>{
  if(typeof artists != "object"){
    throw Error("argumen artists bertipe array")
  }  
  const artistsId = artists.map(
    (artist) => {
      let datas = artistsData.filter(data => data.name === artist)
      if(datas[0]=== undefined){
        new Error(`Artist ${artist} is not registered yet`)
      }
      return(datas[0])
    }
  )
  return artistsId
}