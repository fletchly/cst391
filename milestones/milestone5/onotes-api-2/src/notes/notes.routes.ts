import {Router} from "express";
import * as NotesController from './notes.controller'
import jwtMiddleware from "../middleware/jwt.middleware";

const router = Router();
// router.use(jwtMiddleware)

router.route('/test').get(NotesController.test);

export default router;