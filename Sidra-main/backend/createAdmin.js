
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');
require('dotenv').config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to:", mongoose.connection.name);

    const existing = await Admin.findOne({ username: 'admins' });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashed = await bcrypt.hash('admin1234', 10);

    await Admin.create({
      username: 'admins',
      password: hashed
    });

    console.log("Admin CREATED SUCCESSFULLY");
    process.exit();

  } catch (err) {
    console.log("ERROR:", err);
  }
};

run();