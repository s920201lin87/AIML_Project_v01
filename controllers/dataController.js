// const Material = require('../models/dataModel');

// 顯示首頁並列出所有資料
// exports.getIndex = async (req, res) => {
//     const materials = await Material.find();
//     res.render('index', { materials });
// };
exports.getIndex = (req, res) => {
    res.render('index', { materials: [] }); // 傳入空陣列以避免錯誤
};
// 處理表單提交
exports.createMaterial = async (req, res) => {
    try {
        const { libElement, crystalType, score, doiCode } = req.body;
        const image = req.file ? req.file.filename : ''; // 圖片檔名
        const newMaterial = new Material({ libElement, crystalType, score, doiCode, image });
        await newMaterial.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error creating material:', error);
        res.status(500).send('Internal Server Error');
    }
};
