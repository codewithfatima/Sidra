const News = require('../models/newsModel');

const getNewsById = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(newsItem);
  } catch (error) {
    console.error('getNewsById error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const createNews = async (req, res) => {
  try {
    console.log('req.body:', req.body);
    console.log('req.files:', req.files);

    const { title_en, title_ar, desc_en, desc_ar, date, type } = req.body;

    if (!title_en || !title_ar || !desc_en || !desc_ar || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const image = req.files?.image?.[0]?.filename || null;
    const video = req.files?.video?.[0]?.filename || null;

    const news = await News.create({
      title_en,
      title_ar,
      desc_en,
      desc_ar,
      date,
      type: type || 'news',
      image,
      video,
    });

    res.status(201).json(news);
  } catch (error) {
    console.error('createNews error:', error);
    res.status(400).json({ message: error.message });
  }
};



const getNews = async (req, res) => {
  try {
    const news = await News.find({}).sort({ createdAt: -1 });

    res.status(200).json(news); // MUST be array
  } catch (error) {
    console.log("NEWS ERROR:", error);
    res.status(500).json([]);
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
  getNewsById,
};
