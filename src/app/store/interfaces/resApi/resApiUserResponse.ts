import { User } from './../user/user.interface';
export interface ResApiUserResponse {
  users: User[],
  total:string,
  msg?:string
}
