interface IOrder {
  id: number,
  userId: number,
  productsIds: number
}

interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string
}
    
interface IUserID extends IUser {
  id: number
}

interface IProduct {
  name: string,
  amount: string
}
  
interface IProductID extends IProduct{
  id: number
}

export { 
  IProduct,
  IProductID,
  IUser,
  IUserID, 
  IOrder,
};