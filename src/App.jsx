import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { usePizzas } from "./Store/Store";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router";
import { Cart } from "./Pages/Cart";

function App() {
  const fetchPizzas = usePizzas((state) => state.fetchPizzas);

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
