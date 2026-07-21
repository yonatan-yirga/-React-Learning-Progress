import ProductCard from "./ProductCard";
import products from "../data/products";
import './Parent.css';

function Parent() {
  return (
    <div className="parent-container">
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Parent;