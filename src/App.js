import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Signup from "./components/Signup";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <div className="App">
      {username === null ? (
        <Signup setUsername={setUsername} />
      ) : (
        <Router>
          <Nav />
          <Content username={username} />
        </Router>
      )}
    </div>
  );
}

export default App;
