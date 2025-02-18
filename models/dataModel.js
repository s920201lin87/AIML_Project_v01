const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    libElement: String,
    crystalType: String,
    score: Number,
    doiCode: String,
    image: String, // 存圖片檔名
});

module.exports = mongoose.model('Material', dataSchema);
