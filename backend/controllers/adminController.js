// const Admin = require('../models/Admin');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const adminLogin = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ username });
//     if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = jwt.sign(
//       { id: admin._id, username: admin.username, role: 'admin' },
//       process.env.JWT_SECRET,
//       { expiresIn: '1d' }
//     );

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { adminLogin };



// //http://localhost:5000  3.




const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 🔍 DEBUG INPUT
    console.log("LOGIN REQUEST:", req.body);

    const admin = await Admin.findOne({ username });

    // 🔍 DEBUG DB RESULT
    console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    // 🔍 DEBUG PASSWORD CHECK
    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT_SECRET missing in .env" });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { adminLogin };