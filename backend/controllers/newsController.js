const News = require('../models/newsModel');

// ✅ Get all news
const getNews = async (req, res) => {
  try {
    const { type, limit } = req.query;
    const filter = type && type !== 'all' ? { type } : {};
    const query = News.find(filter).sort({ createdAt: -1 });
    if (limit) query.limit(Number(limit));
    const news = await query;
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create news
const createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Update news
const updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Delete news
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json({ message: 'News deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNews,
  createNews,
  updateNews,
  deleteNews,
};
