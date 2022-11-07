import { RowDataPacket } from 'mysql2';

import { IUser, IUserID } from '../interfaces/IUser';

import mysql from './connection';

export default class UsersModel {
  private connection = mysql;

  public async createUser(body: IUser): Promise <IUserID> {
    const { username, classe, level, password } = body;
    const [user] = await this.connection.execute<IUserID & RowDataPacket[]>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return user;
  }
}