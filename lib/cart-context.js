"use client";

import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, quantity, selectedOptions } = action.payload;
      const key = `${item.id}-${JSON.stringify(selectedOptions || {})}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: item.id,
            name: item.name,
            price: item.price,
            currency: item.currency || "KES",
            quantity,
            options: selectedOptions || {},
          },
        ],
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload.key),
      };
    }
    case "CLEAR": {
      return initialState;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      items: state.items,
      addItem: (item, quantity = 1, selectedOptions = {}) =>
        dispatch({
          type: "ADD_ITEM",
          payload: { item, quantity, selectedOptions },
        }),
      removeItem: (key) =>
        dispatch({ type: "REMOVE_ITEM", payload: { key } }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}