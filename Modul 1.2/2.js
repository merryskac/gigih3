const songs = [
  {
  title: "Hello",
  artists: [
    {
      name: "abc"
    }
  ],
  duration: 200
},

]

const getSong = (songs) =>{
  return new Promise((resolve, reject)=>{
  if(songs){
    setTimeout(()=>{
      resolve(songs)
    }, 2000)
    
  }else{
      reject('Lagu tidak tersedia')
  }
  });
}

noSongs = null;

const promiseTest = getSong(noSongs).then((data)=>{
  let i = 1;
    data.forEach(song => {
      console.log(i)
      console.log("Judul: " + song.title)
      i++
    });
}).catch((err)=>{
  console.log("dengan promise: "+err)
}).finally(()=>{
  console.log("finish")
})

async function asyncTest(songs){
  try{
    console.log("start")
    console.log("process...")
    const res2 = await getSong(songs);
    let i = 1;
    console.log("Async res: ")
    res2.forEach(song => {
      console.log(i)
      console.log("Judul: " + song.title)
      i++
    });
    
  }catch(err){
    console.log(err);
  }finally{
    console.log("finish")
  }
}

let i = 0;
for(let i=0;i<4;i++){
  console.log(i)
  const random = [true, true, true, true, false]
let randomPick = Math.random(random.length)
if(random[randomPick]===true){
  asyncTest(songs)
}else{
  asyncTest(noSongs)
}
i++
}

