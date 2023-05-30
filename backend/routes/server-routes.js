import express from 'express';
import {
  getServiceById,
  getServices,
} from '../controller/service-controller.js';

const router = express.Router();

router.route('/').get(getServices);

router.route('/:id').get(getServiceById);

export default router;
