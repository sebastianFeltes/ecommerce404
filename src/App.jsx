import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/Product";
import { Car } from "./utils/car";

const car = new Car();

function App() {

  useEffect(() => {
    window.localStorage.setItem("car", JSON.stringify(car));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product">{/* RUTA PARA MOSTRAR UN PRODUCTO EN PARTICULAR */}
          <Route path=":id" /* EL ID ES EL PARAMETRO */ element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
