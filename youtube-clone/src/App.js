import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Subscription from "./pages/Subscription";
import React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
}

export default App;
