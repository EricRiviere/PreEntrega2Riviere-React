import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
      setTotal((prevTotal) => prevTotal + item.price * quantity);
    } else {
      console.error("The product was already added to cart");
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((prod) => prod.id === itemId);

    if (itemToRemove) {
      setCart((prev) => prev.filter((prod) => prod.id !== itemId));
      setTotalQuantity(
        (prevTotalQuantity) => prevTotalQuantity - itemToRemove.quantity
      );
      setTotal(
        (prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
