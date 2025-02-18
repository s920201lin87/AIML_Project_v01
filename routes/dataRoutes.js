const express = require('express');
const multer = require('multer');
const { getIndex, createMaterial } = require('../controllers/dataController');

const router = express.Router();

// 設定圖片上傳
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// 路由
router.get('/', getIndex);
router.post('/add', upload.single('image'), createMaterial);

module.exports = router;
