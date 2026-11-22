
function Confirmation({ order, home }) {

  if (!order) return <p>No Order Found!</p>;

  return (
    <div className="confirmation">

      <h1>✓ Order Placed Successfully!</h1>

      <h2>Order Information</h2>

      <p>Order ID: {order.id}</p>

      <p>
        Customer Name:
        {order.customer.firstName} {order.customer.lastName}
      </p>

      <p>Email: {order.customer.email}</p>

      <p>Phone: {order.customer.phone}</p>

      <p>Address: {order.customer.address}</p>

      <p>Shopping Method: {order.customer.shoppingMethod}</p>

      <p>Order Date: {order.date}</p>

      <h2>Ordered Products</h2>

      {order.products.map(item => (
        <p key={item.id}>
          {item.name} x {item.quantity}
          = ${(item.price * item.quantity).toFixed(2)}
        </p>
      ))}

      <h2>Total Amount: ${order.total.toFixed(2)}</h2>

      <h3>Order Status: {order.status}</h3>

      <button onClick={home}>
        Back to Home
      </button>

    </div>
  );
}

export default Confirmation;
