import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import useCart from "./components/useCart";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const [cart, addToCart, clearCart] = useCart([]);

  return (
    <div className="App">
      {username === null ? (
        <Signup setUsername={setUsername} />
      ) : (
        <Router>
          <Nav cartLength={cart.length} />
          <Content
            username={username}
            addToCart={addToCart}
            cart={cart}
            clearCart={clearCart}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
