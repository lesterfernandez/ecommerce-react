import Nav from "./components/Nav";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Content />
      </Router>
    </div>
  );
}

export default App;
