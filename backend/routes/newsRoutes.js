const express = require('express');
const router = express.Router();
const { getNews, updateNews, deleteNews } = require('../controllers/newsController');
const { authenticate, adminOnly } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const News = require('../models/newsModel');

// Public route
router.get('/', getNews);

// Protected admin routes
router.post('/', authenticate, adminOnly, upload.single('image'), async (req, res) => {
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);

  try {
    const { title, desc, date } = req.body;
    
    if (!title || !desc || !date)
      return res.status(400).json({ message: 'Title, description, and date are required.' });

    if (!req.file)
      return res.status(400).json({ message: 'Image file is required.' });

    const news = await News.create({
      title,
      desc,
      date,
      image: req.file.filename,
    });

    res.status(201).json(news);
  } catch (err) {
    console.error('Fatal error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/:id', authenticate, adminOnly, upload.single('image'), updateNews)
router.delete("/:id", deleteNews);

module.exports = router;

