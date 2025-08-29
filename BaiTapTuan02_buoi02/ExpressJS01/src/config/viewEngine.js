const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
  app.set('views', path.join('./src', 'views'));       // Thư mục views
  app.set('view engine', 'ejs');                        // Dùng EJS làm view engine

  // Cấu hình cho các file tĩnh: hình ảnh, CSS, JS
  app.use(express.static(path.join('./src', 'public')));
};

module.exports = configViewEngine;
