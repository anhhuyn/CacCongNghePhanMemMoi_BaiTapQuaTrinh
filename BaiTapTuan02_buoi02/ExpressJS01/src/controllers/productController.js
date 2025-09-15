//productController
const Product = require('../models/productModel');
const client = require('../config/elastic');

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.query.category;  
    const page = parseInt(req.query.page) || 1;  
    const limit = parseInt(req.query.limit) || 10; 

    const skip = (page - 1) * limit;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    // Lấy danh sách sản phẩm theo filter, phân trang
    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit);

    // Lấy tổng số sản phẩm theo filter
    const total = await Product.countDocuments(filter);

    res.status(200).json({
      data: products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy sản phẩm" });
  }
};
// Hàm lấy danh sách các danh mục duy nhất từ Product collection
const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy danh mục" });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { q, category, minPrice, maxPrice, promotion, sortBy, page, limit } = req.query;

    const pageNum = parseInt(page) || 1;
    const perPage = parseInt(limit) || 10;
    const from = (pageNum - 1) * perPage;

    let must = [];
    let filter = [];

    // 🔍 Full-text search theo tên/description
    if (q) {
      must.push({
        multi_match: {
          query: q,
          fields: ["name^3", "description"], // name có độ ưu tiên cao hơn
          fuzziness: "AUTO"
        }
      });
    }

    //  Lọc theo category
    if (category) {
      filter.push({ term: { category } });
    }

    //  Lọc theo khoảng giá
    if (minPrice || maxPrice) {
      let range = {};
      if (minPrice) range.gte = parseFloat(minPrice);
      if (maxPrice) range.lte = parseFloat(maxPrice);
      filter.push({ range: { price: range } });
    }

    // Lọc theo khuyến mãi
if (promotion === "true") {
  filter.push({ range: { discountPercent: { gt: 0 } } });
}

    //  Query Elasticsearch
    const result = await client.search({
      index: 'products',
      from,
      size: perPage,
      body: {
        query: {
          bool: {
            must,
            filter
          }
        },
        sort: [
          sortBy === "price_asc" ? { price: "asc" } :
          sortBy === "price_desc" ? { price: "desc" } :
          sortBy === "views" ? { views: "desc" } :
          { _score: "desc" } // mặc định theo độ liên quan
        ]
      }
    });

    // Trả về dữ liệu
    const hits = result.hits.hits.map(hit => ({
      id: hit._id,
      ...hit._source
    }));

    res.json({
      data: hits,
      total: result.hits.total.value,
      currentPage: pageNum,
      totalPages: Math.ceil(result.hits.total.value / perPage)
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server khi tìm kiếm sản phẩm" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy chi tiết sản phẩm" });
  }
};

module.exports = {
  getProductsByCategory,
  getCategories,  
  searchProducts,
  getProductById,
};
