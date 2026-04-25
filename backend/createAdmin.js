// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv');
// const Admin = require('./models/Admin');

// dotenv.config();

// const createAdmin = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     const username = 'admins';
//     const password = 'admin1234';

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({ username });
//     if (existingAdmin) {
//       console.log('Admin user already exists');
//       process.exit(0);
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = new Admin({ username, password: hashedPassword });
//     await admin.save();

//     console.log('Admin user created');
//     process.exit(0);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// createAdmin();








const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('admin1234', 10);

  await Admin.create({
    username: 'admins',
    password: hashedPassword
  });

  console.log('Admin created successfully');
  process.exit();
};

createAdmin();