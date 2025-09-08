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
      discountPercent: 5,   
      views: 20
    },
    {
      name: 'MacBook Air M3',
      price: 1500,
      description: 'Laptop siêu nhẹ, hiệu suất mạnh mẽ',
      category: 'electronics',
      imageUrl: 'https://bizweb.dktcdn.net/100/444/581/products/macbook-air-2018-42-700x700-jpeg-7d252f07-d9e4-436b-bf05-a33d6bd3a4af.jpg?v=1723091739007',
      discountPercent: 30,   
      views: 160
    },
    {
      name: 'Sách học React',
      price: 30,
      description: 'Hướng dẫn học React từ cơ bản đến nâng cao',
      category: 'books',
      imageUrl: 'https://vntalking.com/wp-content/uploads/2020/08/ReactJS-Cover_v3.png',
      discountPercent: 0,  
      views: 80
    },
    {
      name: 'Áo hoodie nam',
      price: 25,
      description: 'Chất vải cotton, mặc thoáng mát',
      category: 'clothing',
      imageUrl: 'https://image.hm.com/assets/hm/82/72/8272a84db83592448ab37910e608e882fa502677.jpg?imwidth=1260',
      discountPercent: 10,  
      views: 120  
    },
    {
      name: 'Tai nghe Bluetooth Sony',
      price: 150,
      description: 'Chống ồn chủ động, pin 30h',
      category: 'electronics',
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/54/327950/tai-nghe-bluetooth-sony-wi-c100-den-1-750x500.jpg',
      discountPercent: 15,
      views: 95,
    },
    {
      name: 'Giày sneaker nam Adidas',
      price: 90,
      description: 'Thời trang, phong cách thể thao',
      category: 'clothing',
      imageUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eaaba99275e460ebd6c70df0f6c995e_9366/Giay_VL_Court_Base_trang_ID3711_01_standard.jpg',
      discountPercent: 20,
      views: 60,
    },
    {
      name: 'Sách tư duy nhanh và chậm',
      price: 18,
      description: 'Cuốn sách kinh điển về tâm lý học hành vi',
      category: 'books',
      imageUrl:
        'https://salt.tikicdn.com/cache/750x750/ts/product/a0/04/bc/ac1a7c9512c2b8e6d08228506b05c5e4.jpg.webp',
      discountPercent: 0,
      views: 140,
    },
    {
      name: 'Bàn phím cơ AKKO 3068B',
      price: 85,
      description: 'Bàn phím không dây, switch bền bỉ, led RGB',
      category: 'electronics',
      imageUrl:
        'https://product.hstatic.net/1000333506/product/ban-phim-co-khong-day-akko-3068b-plus-black-gold-4_bf5eb8cd59ec482db8d40c920159fdac_grande.jpg',
      discountPercent: 10,
      views: 110,
    },
    {
      name: 'Áo sơ mi nam trắng',
      price: 35,
      description: 'Kiểu dáng công sở, dễ phối đồ',
      category: 'clothing',
      imageUrl:
        'https://n7media.coolmate.me/uploads/December2024/24CMCW.SM009_-_Trang_1.jpg?aio=w-1100',
      discountPercent: 5,
      views: 88,
    },
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
