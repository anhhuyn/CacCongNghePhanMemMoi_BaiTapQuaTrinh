import React from "react";

export default function Card({ product, children }) {
  return (
    <div className="mc-card">
      {product.image && <img src={product.image} alt={product.name} className="mc-card-img" />}
      <div className="mc-card-body">
        <h4>{product.name}</h4>
        <div>{product.price?.toLocaleString?.() ?? product.price}₫</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
