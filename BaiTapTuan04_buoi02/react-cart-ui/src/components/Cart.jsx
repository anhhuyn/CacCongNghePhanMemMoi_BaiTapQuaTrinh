import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import Button from "./Button";
import InputText from "./InputText";
import ButtonDelete from "./ButtonDelete";


export default function Cart() {
  const { state, updateItem, removeItem, clearCart } = useCart();

  const [modalOpen, setModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const [confirmClearOpen, setConfirmClearOpen] = useState(false); // modal xác nhận xóa hết

  if (!state.items.length) return <div>Giỏ hàng rỗng</div>;

  const handleRemoveClick = (item) => {
    setItemToRemove(item);
    setModalOpen(true);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      removeItem(itemToRemove.id);
    }
    setModalOpen(false);
    setItemToRemove(null);
  };

  const handleClearCart = () => {
    setConfirmClearOpen(true);
  };

  const confirmClearCart = () => {
    clearCart();
    setConfirmClearOpen(false);
  };

  return (
    <div className="mc-cart">
      <h3>Giỏ hàng ({state.totalQuantity})</h3>
     <ul style={{ listStyleType: 'none', padding: 0 }}>
  {state.items.map(it => (
    <li key={it.id} style={{ marginBottom: '12px' }}>
      <div className="cart-item">
        <span className="cart-item-name">
          {it.name} - {it.price}₫
        </span>

        <InputText
          type="number"
          min="1"
          value={it.quantity}
          onChange={(val) => updateItem(it.id, Number(val))}
        
        />

        <ButtonDelete
          onClick={() => handleRemoveClick(it)}
        />
      </div>
    </li>
  ))}
</ul>


      <div>Tổng: {state.totalPrice}₫</div>
      <ButtonDelete  onClick={handleClearCart} label="Xóa hết" />

      {/* Modal xác nhận xóa 1 item */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Bạn có chắc muốn xóa <strong>{itemToRemove?.name}</strong> khỏi giỏ hàng?</p>
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <Button className="mc-btn-danger" onClick={confirmRemove}>Đồng ý</Button>
          <Button onClick={() => setModalOpen(false)}>Hủy</Button>
        </div>
      </Modal>

      {/* Modal xác nhận xóa toàn bộ */}
      <Modal open={confirmClearOpen} onClose={() => setConfirmClearOpen(false)}>
        <p>Bạn có chắc muốn <strong>xóa toàn bộ giỏ hàng</strong> không?</p>
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <Button className="mc-btn-danger" onClick={confirmClearCart}>Xóa hết</Button>
          <Button onClick={() => setConfirmClearOpen(false)}>Hủy</Button>
        </div>
      </Modal>
    </div>
  );
}
