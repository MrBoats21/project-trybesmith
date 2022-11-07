import { Request, Response } from 'express';
import OrdersService from '../service/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  async getAllOrders(req: Request, res: Response) {
    const orders = await this.ordersService.getOrders();
    res.status(200).json(orders);
  }
}