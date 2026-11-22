
function Cart({
  cart,
  total,
  updateQuantity,
  removeItem,
  checkout
}) {
  return (
    <div className="cart">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your Cart is Empty!</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-info">

              <h3>{item.name}</h3>

              <p>Price: ${item.price.toFixed(2)}</p>

              <div className="quantity-control">

                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>

              </div>

              <button
                className="remove"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>

            <h3>
              ${(item.price * item.quantity).toFixed(2)}
            </h3>

          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-total">

          <h2>Total: ${total.toFixed(2)}</h2>

          <button onClick={checkout}>
            CHECKOUT
          </button>

        </div>
      )}

    </div>
  );
}

export default Cart;
