import { Router } from 'express';

import ProductsController from '../controller/product.controller';

const productController = new ProductsController();

const router = Router();

router.post('/', productController.createProduct.bind(productController));

router.get('/', productController.getProducts.bind(productController));

export default router;