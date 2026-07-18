import { useState, useCallback } from "react";
import Usecallbackchild from "./Usecallbackchild";

function Usecallbackall() {
   const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Mouse", price: 30 },
    { id: 3, title: "Keyboard", price: 80 },
  ];

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <Usecallbackchild
          key={product.id}
          product={product}
          youn={addToCart}
        />
      ))}

      <hr />

      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <p>
            {item.title} - ${item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Usecallbackall;