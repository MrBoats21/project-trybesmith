import { Request, Response } from 'express';

import UsersService from '../service/user.service';

export default class UsersController {
  public usersService = new UsersService();

  async createUser(req: Request, res:Response) {
    const token = await this.usersService.createUser(req.body);
    res.status(201).json({ token });
  }
}