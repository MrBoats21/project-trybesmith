import jsonwebtoken from 'jsonwebtoken';

import { IUser, IUserID } from '../interfaces';

import UsersModel from '../models/user.model';

export default class UsersService {
  public users = new UsersModel();

  public jwt = jsonwebtoken;

  public async createUser(body: IUser) {
    const user = await this.users.createUser(body);
    if (user) return this.generateToken(user);
  }

  public generateToken(user: IUserID) {
    const payload = { 
      id: user.id, 
      username: user.username, 
    }; 

    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
  }
}