import React from "react";
import "../styles.css";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}
