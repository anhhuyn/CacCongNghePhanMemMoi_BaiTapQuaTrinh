import React from "react";
import Button from "./Button"; 

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="mc-modal-overlay" onClick={onClose}>
      <div className="mc-modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <Button onClick={onClose}>Đóng</Button>
        </div>
      </div>
    </div>
  );
}
