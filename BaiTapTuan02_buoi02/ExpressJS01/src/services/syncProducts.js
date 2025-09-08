// src/services/syncProducts.js
const Product = require('../models/productModel');
const client = require('../config/elastic');

async function syncProducts() {
  try {
    // 1. Xóa index cũ (nếu tồn tại)
    await client.indices.delete({ index: 'products' }, { ignore_unavailable: true });
    console.log("✅ Đã xóa index cũ 'products'");

    // 2. Tạo lại index mới
    await client.indices.create({
      index: 'products',
      body: {
        mappings: {
          properties: {
            name: { type: "text" },
            price: { type: "float" },
            description: { type: "text" },
            category: { type: "keyword" },
            imageUrl: { type: "keyword" },
            discountPercent: { type: "integer" }, // % khuyến mãi
            views: { type: "integer" }            // lượt xem
          }
        }
      }
    });
    console.log("✅ Đã tạo index mới 'products'");

    // 3. Lấy toàn bộ sản phẩm từ MongoDB
    const products = await Product.find({});
    console.log(`📦 Tìm thấy ${products.length} sản phẩm trong MongoDB`);

    // 4. Index từng sản phẩm vào Elasticsearch
    for (let product of products) {
      await client.index({
        index: 'products',
        id: product._id.toString(),
        body: {
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category,
          imageUrl: product.imageUrl,
          discountPercent: product.discountPercent || 0,
          views: product.views || 0,
        }
      });
    }

    // 5. Refresh index để có thể search ngay
    await client.indices.refresh({ index: 'products' });
    console.log("🎉 Đồng bộ xong!");
  } catch (error) {
    console.error("❌ Lỗi khi sync sản phẩm:", error);
  }
}

module.exports = syncProducts;
