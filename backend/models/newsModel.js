const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  type: {
    type: String,
    default: 'news',
  },
  date: {
    type: String,
    required: [true, 'Date is required'], // e.g. "02 Aug"
  },
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

module.exports = News;
