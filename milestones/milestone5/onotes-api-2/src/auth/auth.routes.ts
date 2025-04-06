import { Router } from "express";
import * as AuthController from './auth.controller'

const router = Router();

router.route('/register').post(AuthController.createUser);

router.route('/login').post(AuthController.login);

export default router;