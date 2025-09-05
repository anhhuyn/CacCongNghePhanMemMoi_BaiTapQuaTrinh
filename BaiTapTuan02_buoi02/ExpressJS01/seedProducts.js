require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/productModel.js'); // đúng đường dẫn model của bạn
const connection = require('./src/config/database.js'); // đúng đường dẫn

const seedProducts = async () => {
  await connection();

  const sampleProducts = [
    {
      name: 'iPhone 15 Pro',
      price: 1200,
      description: 'Flagship điện thoại từ Apple',
      category: 'electronics',
      imageUrl: 'https://bachlongstore.vn/vnt_upload/product/10_2023/iii2.png',
    },
    {
      name: 'MacBook Air M3',
      price: 1500,
      description: 'Laptop siêu nhẹ, hiệu suất mạnh mẽ',
      category: 'electronics',
      imageUrl: 'https://bizweb.dktcdn.net/100/444/581/products/macbook-air-2018-42-700x700-jpeg-7d252f07-d9e4-436b-bf05-a33d6bd3a4af.jpg?v=1723091739007',
    },
    {
      name: 'Sách học React',
      price: 30,
      description: 'Hướng dẫn học React từ cơ bản đến nâng cao',
      category: 'books',
      imageUrl: 'https://vntalking.com/wp-content/uploads/2020/08/ReactJS-Cover_v3.png',
    },
    {
      name: 'Áo hoodie nam',
      price: 25,
      description: 'Chất vải cotton, mặc thoáng mát',
      category: 'clothing',
      imageUrl: 'https://image.hm.com/assets/hm/82/72/8272a84db83592448ab37910e608e882fa502677.jpg?imwidth=1260',
    }
  ];

  try {
    await Product.deleteMany(); // Xóa hết dữ liệu cũ (nếu cần)
    const result = await Product.insertMany(sampleProducts);
    console.log(`Đã thêm ${result.length} sản phẩm.`);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
  } finally {
    mongoose.connection.close(); // Đóng kết nối
  }
};

seedProducts();
