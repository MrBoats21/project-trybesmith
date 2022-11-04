import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { IProduct, IProductID } from '../interfaces/product.interface';

import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  public async createProduct(productBody: IProduct): Promise<IProductID> {
    const { name, amount } = productBody;
    
    const [product] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = product;

    return { id: insertId, ...productBody };
  }

  public async getProducts(): Promise<IProductID[]> {
    const [products] = await this.connection.execute<RowDataPacket[] & IProductID[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return products;
  }
}