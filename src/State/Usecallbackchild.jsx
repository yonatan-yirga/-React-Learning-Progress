import React from "react";
import './Usecallbackchild.css';

const Usecallbackchild = React.memo(function Usecallbackchild({
  product,
  youn,
}) {
  return (
    <div className="callback-child">
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => youn(product)}>
        Add to Cart
      </button>
    </div>
  );
});

export default Usecallbackchild;