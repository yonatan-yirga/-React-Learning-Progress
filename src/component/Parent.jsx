import ProductCard from "./ProductCard";
import products from "../data/products";

function Parent() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Parent;