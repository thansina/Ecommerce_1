
function Products({ products, addToCart }) {
  return (
    <div className="products">

      <h1>Our Products</h1>

      <p>Welcome to My E-Commerce Shop</p>

      <div className="product-list">

        {products.map(product => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p className="price">
              ${product.price}
            </p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;
