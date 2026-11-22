
import { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

function App() {
  const [page, setPage] = useState('shop');
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  // Product List - 10 Products
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 650,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    },
    {
      id: 2,
      name: 'Mouse',
      price: 15,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 25,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
    },
    {
      id: 4,
      name: 'Monitor',
      price: 120,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500'
    },
    {
      id: 5,
      name: 'Headphones',
      price: 45,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 6,
      name: 'Smartphone',
      price: 350,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    },
    {
      id: 7,
      name: 'Tablet',
      price: 220,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    },
    {
      id: 8,
      name: 'Camera',
      price: 480,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
    },
    {
      id: 9,
      name: 'Smart Watch',
      price: 90,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    },
    {
      id: 10,
      name: 'Speaker',
      price: 35,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
    }
  ];

  // Add Product to Cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const exist = prevCart.find(item => item.id === product.id);

      if (exist) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update Quantity - Minimum is 1
  const updateQuantity = (id, change) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change)
            }
          : item
      )
    );
  };

  // Remove Product from Cart
  const removeItem = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  };

  // Calculate Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Place Order
  const placeOrder = (customer) => {
    const newOrder = {
      id: 'ORD-' + Date.now(),
      customer: customer,
      products: cart,
      total: total,
      date: new Date().toLocaleString(),
      status: 'Pending'
    };

    setOrder(newOrder);
    setCart([]);
    setPage('confirmation');
  };

  // Back Home
  const home = () => {
    setPage('shop');
  };

  return (
    <div>
      <Navbar
        cartCount={cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        )}
        setPage={setPage}
      />

      <div className="container">

        {page === 'shop' && (
          <Products
            products={products}
            addToCart={addToCart}
          />
        )}

        {page === 'cart' && (
          <Cart
            cart={cart}
            total={total}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            checkout={() => setPage('checkout')}
          />
        )}

        {page === 'checkout' && (
          <Checkout
            cart={cart}
            total={total}
            placeOrder={placeOrder}
            goBack={() => setPage('cart')}
          />
        )}

        {page === 'confirmation' && (
          <Confirmation
            order={order}
            home={home}
          />
        )}

      </div>

      <footer>
        <p>
          © 2026 My E-Commerce Shop. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
