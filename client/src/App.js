import "./App.css";

import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {
  return (
    <div>
      <link to="/">Home</link>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
