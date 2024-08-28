import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/store.services";

function Catalog() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const data = await fetchProducts();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ul className="w-full h-full flex flex-wrap gap-2 justify-evenly py-4">
        {products
          ? products.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                className="hover:bg-slate-100 border h-80 w-1/4 rounded-lg shadow-lg flex flex-col items-center gap-2 p-2"
                key={index}
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
              </Link>
            ))
          : false}
      </ul>
    </div>
  );
}

export default Catalog;
