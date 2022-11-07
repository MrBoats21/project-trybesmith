export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string
}
  
export interface IUserID extends IUser {
  id: number
}