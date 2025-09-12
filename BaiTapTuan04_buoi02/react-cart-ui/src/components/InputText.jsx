import React from "react";

export default function InputText({ value, onChange, ...rest }) {
  return <input className="mc-input" value={value} onChange={e => onChange && onChange(e.target.value)} {...rest} />;
}
