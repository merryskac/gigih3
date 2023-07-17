import { getUserByIDRepo } from "../../repositories/users.js";

export const getUserIDUsecase = (id)=>{
  return getUserByIDRepo(id);
}