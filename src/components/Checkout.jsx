
import { useState } from 'react';

function Checkout({ cart, total, placeOrder, goBack }) {

  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    shoppingMethod: 'Delivery'
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    placeOrder(customer);
  };

  return (
    <div className="checkout">

      <h1>Checkout Form</h1>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input
          name="firstName"
          placeholder="Enter First Name"
          value={customer.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="Enter Last Name"
          value={customer.lastName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={customer.phone}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter Address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <label>Shopping Method</label>

        <select
          name="shoppingMethod"
          value={customer.shoppingMethod}
          onChange={handleChange}
        >
          <option value="Delivery">Delivery</option>
          <option value="Pickup">Store Pickup</option>
        </select>

        <h2>Order Summary</h2>

        {cart.map(item => (
          <p key={item.id}>
            {item.name} x {item.quantity}
            = ${(item.price * item.quantity).toFixed(2)}
          </p>
        ))}

        <h2>Total: ${total.toFixed(2)}</h2>

        <button type="button" onClick={goBack}>
          Back to Cart
        </button>

        <button type="submit" disabled={cart.length === 0}>
          PLACE ORDER
        </button>

      </form>

    </div>
  );
}

export default Checkout;
