const express = require('express');
const path = require('path');
require('dotenv').config();
const multer = require('multer'); 
require('./config/db');
const cors = require('cors');



const newsRoutes = require('./routes/newsRoutes'); 
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const fs = require('fs');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root test route
app.get('/', (req, res) => {
  res.send('hello from backend');
});

// Use news routes under /api/news
app.use('/api/news', newsRoutes);
app.use('/api/admin', authRoutes); 



// Add this error-handling middleware here, at the end:
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
