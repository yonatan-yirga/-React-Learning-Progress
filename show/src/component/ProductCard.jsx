
import './ProductCard.css';

function ProductCard({product}) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>price is ${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard