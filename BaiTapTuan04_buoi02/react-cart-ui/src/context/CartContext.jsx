import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [], // { id, name, price, quantity, image }
  totalQuantity: 0,
  totalPrice: 0
};

const calcTotals = (items) => {
  const totalQuantity = items.reduce((s, i) => s + Number(i.quantity), 0);
  const totalPrice = items.reduce((s, i) => s + Number(i.quantity) * Number(i.price), 0);
  return { totalQuantity, totalPrice };
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      const totals = calcTotals(action.payload || []);
      return { ...state, items: action.payload || [], ...totals };
    }
    case "ADD_ITEM": {
      const p = action.payload; // { id, name, price, quantity }
      const items = [...state.items];
      const idx = items.findIndex(i => i.id === p.id);
      if (idx >= 0) {
        items[idx] = { ...items[idx], quantity: items[idx].quantity + (p.quantity || 1) };
      } else {
        items.push({ ...p, quantity: p.quantity || 1 });
      }
      const totals = calcTotals(items);
      return { ...state, items, ...totals };
    }
    case "UPDATE_ITEM": {
      const { id, quantity } = action.payload;
      let items = state.items.map(i => i.id === id ? { ...i, quantity: Number(quantity) } : i);
      items = items.filter(i => i.quantity > 0);
      const totals = calcTotals(items);
      return { ...state, items, ...totals };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(i => i.id !== action.payload);
      const totals = calcTotals(items);
      return { ...state, items, ...totals };
    }
    case "CLEAR": {
      return { ...initialState };
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children, storageKey = "my_cart" }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        dispatch({ type: "INIT", payload: JSON.parse(raw) });
      }
    } catch (e) { /* ignore */ }
  }, [storageKey]);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state.items));
    } catch (e) {}
  }, [state.items, storageKey]);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const updateItem = (id, quantity) => dispatch({ type: "UPDATE_ITEM", payload: { id, quantity }});
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider value={{ state, addItem, updateItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
