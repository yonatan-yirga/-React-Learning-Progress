

function ProductCard({product}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p style={{ color: 'blue'}}>  price is${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard