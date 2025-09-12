import React from "react";
import Button from "./Button";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  return <Button onClick={() => addItem(product)}>Thêm vào giỏ</Button>;
}
