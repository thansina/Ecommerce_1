
function Navbar({ cartCount, setPage }) {
  return (
    <nav className="navbar">

      <h2 onClick={() => setPage('shop')}>
        🛒 My Shop
      </h2>

      <div>
        <button onClick={() => setPage('shop')}>
          Home
        </button>

        <button onClick={() => setPage('cart')}>
          Cart ({cartCount})
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
