import React from "react";

const Usecallbackchild = React.memo(function Usecallbackchild({
  product,
  youn,
}) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => youn(product)}>
        Add to Cartsssssss
      </button>
    </div>
  );
});

export default Usecallbackchild;