const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// MongoDB 連線
// mongoose.connect('mongodb://localhost:27017/materialsDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected.'))
//     .catch(err => console.error('MongoDB connection error:', err));

// 設定模板引擎和靜態檔案路徑
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// 中介軟體
app.use(bodyParser.urlencoded({ extended: false }));

// 路由
app.use('/', dataRoutes);

// 啟動伺服器
const PORT = 1234;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
