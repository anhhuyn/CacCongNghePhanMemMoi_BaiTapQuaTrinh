import React from "react";
import Card from "./components/Card";
import AddToCartButton from "./components/AddToCartButton";
import Cart from "./components/Cart";

// Danh sách sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Áo thun",
    price: 200000,
    image: "https://pos.nvncdn.com/2865a9-85186/ps/20240128_Za9UQZ5rPG.jpeg?v=1706457960"
  },
  {
    id: 2,
    name: "Quần jean",
    price: 350000,
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/422/076/products/o1cn0143dvqy1wyunstlg0b-2217573442801-0-cib-1.jpg?v=1731829273413"
  }
];

export default function App() {
  return (
    <div>
      <h1>Demo React Cart UI</h1>

      {/* Dùng className="product-list" thay vì style inline */}
      <div className="product-list">
        {products.map((p) => (
          <Card key={p.id} product={p}>
            <AddToCartButton product={p} />
          </Card>
        ))}
      </div>

      <hr />
      <Cart />
    </div>
  );
}
