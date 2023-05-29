import Service from '../models/serviceModel.js';
import asyncHandler from 'express-async-handler';

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  

  res.json({ services });
});
export { getServices };
