import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
