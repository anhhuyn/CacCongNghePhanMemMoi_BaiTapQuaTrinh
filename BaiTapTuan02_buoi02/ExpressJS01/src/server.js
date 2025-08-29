require('dotenv').config(); // Load biến môi trường từ .env

const express = require('express');
const path = require('path');
const cors = require('cors');

// Import module backend
const configViewEngine = require('./config/viewEngine');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const { getHomepage } = require('./controllers/homeController');

const app = express();
const port = process.env.PORT || 8888;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ View engine EJS (nếu còn dùng)
configViewEngine(app);

// ✅ Route trang chủ dùng EJS
const webAPI = express.Router();
webAPI.get('/', getHomepage);
app.use('/', webAPI);

// ✅ REST API routes
app.use('/v1/api', apiRoutes);

//
// ✅✅ Thêm phần này để phục vụ React sau khi build (Vite)
// Đường dẫn đến thư mục React build (Vite dùng `dist`)
const reactBuildPath = path.join(__dirname, '../../ReactJS01/reactjs01/dist');

// Serve static files từ React
app.use(express.static(reactBuildPath));

// Nếu người dùng truy cập bất kỳ route frontend nào, trả về index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

//
// ✅ Kết nối DB và khởi động server
(async () => {
  try {
    await connection(); // MongoDB
    app.listen(port, () => {
      console.log(`✅ Backend NodeJS App listening on port ${port}`);
    });
  } catch (error) {
    console.log('❌ Error connect to DB: ', error);
  }
})();
