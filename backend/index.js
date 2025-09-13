const express = require('express');
const path = require('path');
require('dotenv').config();
const multer = require('multer'); 
require('./config/db');
const cors = require('cors');

const newsRoutes = require('./routes/newsRoutes'); 
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

const fs = require('fs');

app.get('/test-email-config', (req, res) => {
  res.json({
    emailUser: process.env.EMAIL_USER || 'not set',
    emailPassSet: !!process.env.EMAIL_PASS,
  });
});

// Check critical env vars on startup
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('WARNING: EMAIL_USER or EMAIL_PASS is not set in environment variables.');
}

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/list-uploads', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read uploads folder' });
    res.json(files);
  });
});

// Use routes
app.use('/api/news', newsRoutes);
app.use('/api/admin', authRoutes); 
app.use('/api/contact', contactRoutes);

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '*****' : 'NOT SET');


// Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError || err.message === 'Only images are allowed') {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  next();
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`);
});
