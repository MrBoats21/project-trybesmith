import { Router } from 'express';
import UsersController from '../controller/user.controller';

const usersController = new UsersController();

const router = Router();

router.post('/', usersController.createUser.bind(usersController));

export default router;