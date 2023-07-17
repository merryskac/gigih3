import users from '../users.json' assert {type:'json'}

export const getUserByIDRepo = (id) =>{
  const userArray = users.filter(user => user.id === Number(id));

  if(userArray.length === 0){
    return null;
  }

  return userArray[0];
}