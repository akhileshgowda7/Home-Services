import express from 'express';
import { getServices } from '../controller/service-controller.js';

const router = express.Router();

router.route('/').get(getServices);

export default router;
