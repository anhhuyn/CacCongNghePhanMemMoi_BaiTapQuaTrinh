import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spin, Alert } from "antd";
import axios from "../util/axios.customize";
import { getProductByIdApi, getProductsByCategoryApi } from "../util/api";


const { Meta } = Card;

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [relatedLoading, setRelatedLoading] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const product = await getProductByIdApi(id);
                console.log("Product data:", product); // Kiểm tra kỹ ở đây
                setProduct(product);
                // Gọi API để lấy các sản phẩm cùng danh mục (trừ chính sản phẩm đang xem)
                const relatedRes = await getProductsByCategoryApi(product.category, 4);
                const filtered = relatedRes.data.filter(p => p._id !== product._id);
                setRelatedProducts(filtered);
                setRelatedLoading(false);

            } catch (err) {
                console.error("Lỗi khi fetch sản phẩm:", err);
                setError("Không tìm thấy sản phẩm");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);


    if (loading) return <Spin size="large" style={{ display: "block", margin: "50px auto" }} />;
    if (error) return <Alert message={error} type="error" style={{ margin: "20px" }} />;

    if (!product) return null;

    const discount = product.discountPercent || 0;
    const finalPrice = product.price - (product.price * discount) / 100;

    return (
        <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
            <Card
                cover={
                    <img
                        alt={product.name}
                        src={product.imageUrl || product.image || "https://via.placeholder.com/600x400?text=No+Image"}
                        style={{ objectFit: "cover", maxHeight: 400 }}
                    />
                }
            >
                <Meta title={product.name} description={product.description} />
                <div style={{ marginTop: 20, fontSize: 18 }}>
                    {discount > 0 ? (
                        <>
                            <div>
                                Giá gốc: <span style={{ textDecoration: "line-through", color: "gray" }}>${product.price}</span>
                            </div>
                            <div>
                                Giá khuyến mãi: <span style={{ color: "red", fontWeight: "bold" }}>${finalPrice}</span> (-{discount}%)
                            </div>
                        </>
                    ) : (
                        <div>Giá: ${product.price}</div>
                    )}
                    <div>Lượt xem: {product.views || 0}</div>
                    <div>Danh mục: {product.category}</div>
                </div>
            </Card>
            <div style={{ marginTop: 40 }}>
                <h3>Sản phẩm tương tự</h3>
                {relatedLoading ? (
                    <Spin />
                ) : relatedProducts.length > 0 ? (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                        {relatedProducts.map((item) => (
                            <Card
                                key={item._id}
                                hoverable
                                style={{ width: 180 }}
                                cover={
                                    <img
                                        alt={item.name}
                                        src={item.imageUrl || item.image || "https://via.placeholder.com/180x120?text=No+Image"}
                                        style={{ height: 120, objectFit: "cover" }}
                                    />
                                }
                                onClick={() => window.location.href = `/product/${item._id}`}
                            >
                                <Meta title={item.name} />
                                <div style={{ marginTop: 10, fontSize: 14 }}>
                                    <strong>${item.price}</strong>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p>Không có sản phẩm tương tự.</p>
                )}
            </div>

        </div>
    );
};

export default ProductDetailPage;
