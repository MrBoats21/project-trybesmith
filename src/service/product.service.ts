import { IProduct, IProductID } from '../interfaces';

import ProductModel from '../models/product.model';

export default class ProductService {
  public products = new ProductModel();

  public async createProduct(productBody: IProduct): Promise<IProductID> {
    return this.products.createProduct(productBody);
  }

  public async getProducts(): Promise<IProductID[]> {
    return this.products.getProducts();
  }
}