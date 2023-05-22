import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //  const [cart, setCart] = useState([]);
  const addToCart = () => {
    console.log("addtoCart");
  };
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
