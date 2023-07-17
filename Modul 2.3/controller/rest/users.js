import { getUserIDUsecase } from "../../usecase/users/users.js"
export const getDetailedUser = (req,res)=>{
  const id = req.params.id;
  const users = getUserIDUsecase(id);
  if(users===undefined){
    return res.status(404).json({
      message:"Data not found"
    })
  }

  res.json({
    data:users
  })
} 