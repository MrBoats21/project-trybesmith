import { Request, Response } from 'express';

import ProductService from '../service/product.service';

export default class ProductsController {
  public productService = new ProductService();

  async createProduct(req: Request, res: Response) {
    const product = req.body;
    const createdProduct = await this.productService.createProduct(product);
    res.status(201).json(createdProduct);
  }

  async getProducts(req: Request, res: Response) {
    const products = await this.productService.getProducts();
    res.status(200).json(products);
  }
}