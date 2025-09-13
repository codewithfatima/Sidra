const express = require('express');
const { createNews, getNews, updateNews, deleteNews } = require('../controllers/newsController');
const { uploadFields } = require('../middleware/uploadMiddleware'); 
const router = express.Router();

router.get('/', getNews);
router.post('/', uploadFields, createNews);
router.put('/:id', uploadFields, updateNews);
router.delete('/:id', deleteNews);

module.exports = router;
