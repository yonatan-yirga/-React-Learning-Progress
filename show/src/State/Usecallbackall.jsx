import { useState, useCallback } from "react";
import Usecallbackchild from "./Usecallbackchild";
import './Usecallbackall.css';

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
    <div className="usecallback-container">
      <h1>Products</h1>

      <div className="products-list">
        {products.map((product) => (
          <Usecallbackchild
            key={product.id}
            product={product}
            youn={addToCart}
          />
        ))}
      </div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>

        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>
              {item.title} - ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usecallbackall;