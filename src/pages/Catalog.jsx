import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchProducts } from "../services/store.services";

function Catalog() {
  const [products, setProducts] = useState([]);

  // FUNCION PARA OBTENER LOS PRODUCTOS LLAMANDO AL SERVICIO
  async function getProducts() {
    const data = await fetchProducts();
    setProducts(data);
  }

  // LLAMADO AL EFFECT PARA OBTENER LOS PRODUCTOS AL CARGAR LA PAGINA
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar/> 
      <ul className="w-full h-full flex flex-wrap gap-2 justify-evenly py-4">
        {products //SI LOS PRODUCTOS ESTAN CARGADOS, MAPEA Y MUESTRA LOS PRODUCTOS
          ? products.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={index}
                className="hover:bg-slate-100 border h-80 w-1/4 rounded-lg shadow-lg flex flex-col items-center gap-2 p-2"
              >
                <span className="text-xl font-medium h-24">
                  {product.title}
                </span>
                <span className="w-full flex justify-center bg-white">
                  <img className="h-32" src={product.image} alt="" />
                </span>
                <span className="font-normal">{product.price}</span>
                <span>{product.category}</span>
                {/* <span>{product.description}</span> */}
                Ver
              </Link>
            ))
          : false}
      </ul>
    </div>
  );
}

export default Catalog;
