import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc GET All Users
//@route GET /api/users
//@access PRIVATE/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export { getUsers };
