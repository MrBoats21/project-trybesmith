import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import mysql from '../models/connection';

export default class OrdersModel {
  private connection = mysql;

  public async getOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id`,
    );
    return result;
  }
}