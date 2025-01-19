import { useEffect } from "react";
import "./App.css";
import Card from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Navigation from "./Components/NavBar/Navigation";
import { usePizzas } from "./Store/Store";

function App() {
  const fetchPizzas = usePizzas((state) => state.fetchPizzas);

  useEffect(() => {
    fetchPizzas();
  }, []);
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Card />
    </div>
  );
}

export default App;
