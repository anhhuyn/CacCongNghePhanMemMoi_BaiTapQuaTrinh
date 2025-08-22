import express from "express";            // nạp express
import bodyParser from "body-parser";     // nạp body-parser
import viewEngine from "./config/viewEngine.js";  // config view EJS
import initWebRoutes from "./route/web.js";      // file route
import connectDB from "./config/configdb.js";    // kết nối DB
//require('dotenv').config();               // đọc file .env
import dotenv from 'dotenv';
dotenv.config();


let app = express();

// Config app
app.use(bodyParser.json()); // parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // parse form data

// Cấu hình view + route
viewEngine(app);
initWebRoutes(app);

// Kết nối DB
connectDB();

// Set port từ .env hoặc mặc định 6969
let port = process.env.PORT || 6969;

// Chạy server
app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
