import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import services from './data/services.js';
import User from './models/userModel.js';
import Service from './models/serviceModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Service.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleServices = services.map((service) => {
      return { ...service, user: adminUser };
    });

    await Service.insertMany(sampleServices);
    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Service.deleteMany();

    console.log('Data Destroyed');
    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
