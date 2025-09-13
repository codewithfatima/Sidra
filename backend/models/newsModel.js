const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title_en: { type: String, required: [true, 'Title (English) is required'] },
  title_ar: { type: String, required: [true, 'Title (Arabic) is required'] },
  desc_en: { type: String, required: [true, 'Description (English) is required'] },
  desc_ar: { type: String, required: [true, 'Description (Arabic) is required'] },
  date: { type: Date, required: [true, 'Date is required'] },
  image: { type: String },
  video: { type: String },
  type: { type: String, default: 'news' },
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);

