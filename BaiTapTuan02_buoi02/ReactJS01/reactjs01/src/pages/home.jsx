import { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Empty, Button, Space, Input, Slider, Select } from 'antd';
import { getCategoriesApi, searchProductsApi } from '../util/api';
import { Link } from 'react-router-dom';


const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("");
  const [onlyDiscount, setOnlyDiscount] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await getCategoriesApi();
      const categoriesData = res.data || res;
      setCategories(["All", ...categoriesData]);
    } catch (error) {
      console.error("Lỗi khi lấy danh mục:", error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = {
        q: keyword || undefined,
        category: selectedCategory !== "All" ? selectedCategory : undefined,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        sortBy: sortBy || undefined,
        page: 1,
        limit: 12,
      };

      const res = await searchProductsApi(params);
      let data = Array.isArray(res.data) ? res.data : res.data?.data || [];

      if (onlyDiscount) {
        data = data.filter((item) => item.discountPercent > 0);
      }

      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, keyword, priceRange, sortBy, onlyDiscount]);

  return (
    <div style={{ padding: 20 }}>
      {/* Bộ lọc */}
      <Space style={{ marginBottom: 20 }} wrap>
        {categories.map((cat) => (
          <Button
            key={cat}
            type={selectedCategory === cat ? "primary" : "default"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}

        <Button
          type={onlyDiscount ? "primary" : "default"}
          onClick={() => setOnlyDiscount(!onlyDiscount)}
        >
          Khuyến mãi
        </Button>

        <Search
          placeholder="Tìm sản phẩm..."
          onSearch={(value) => setKeyword(value)}
          style={{ width: 200 }}
          allowClear
        />

        <div style={{ width: 250 }}>
          <span>
            Khoảng giá: <b>{priceRange[0]}$</b> - <b>{priceRange[1]}$</b>
          </span>
          <Slider
            range
            min={0}
            max={5000}
            step={100}
            value={priceRange}
            onChange={(val) => setPriceRange(val)}
          />
        </div>

        <Select
          placeholder="Sắp xếp"
          style={{ width: 160 }}
          onChange={(val) => setSortBy(val)}
          allowClear
        >
          <Option value="price_asc">Giá tăng dần</Option>
          <Option value="price_desc">Giá giảm dần</Option>
          <Option value="views">Lượt xem nhiều</Option>
        </Select>
      </Space>

      {/* Danh sách sản phẩm */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 50 }}>
          <Spin size="large" />
        </div>
      ) : products.length === 0 ? (
        <Empty description="Không có sản phẩm nào" />
      ) : (
        <Row gutter={[16, 16]}>
          {products.map((item) => {
            const discount = item.discountPercent || 0;
            const finalPrice = item.price - (item.price * discount) / 100;

            return (
              <Col key={item._id || item.id} xs={24} sm={12} md={8} lg={6}>
                <div style={{ height: "100%" }}>
                  <Link to={`/product/${item._id || item.id}`}>
                  <Card
                    hoverable
                    style={{ height: "100%" }}
                    bodyStyle={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 180 }}
                    cover={
                      <img
                        alt={item.name}
                        src={item.imageUrl || item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                        style={{ height: 200, objectFit: "cover" }}
                      />
                    }
                  >
                    <Meta
                      title={item.name}
                      description={
                        <div style={{ height: 80, overflow: "hidden" }}>
                          {discount > 0 ? (
                            <>
                              <div>
                                💲 Giá gốc:{" "}
                                <span style={{ textDecoration: "line-through", color: "gray" }}>
                                  ${item.price}
                                </span>
                              </div>
                              <div>
                                ⚡ Giá khuyến mãi:{" "}
                                <span style={{ color: "red", fontWeight: "bold" }}>
                                  ${finalPrice}
                                </span>{" "}
                                (-{discount}%)
                              </div>
                            </>
                          ) : (
                            <div>💲 Giá: ${item.price}</div>
                          )}
                          <div>👀 Lượt xem: {item.views || 0}</div>
                        </div>
                      }
                    />
                  </Card>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
