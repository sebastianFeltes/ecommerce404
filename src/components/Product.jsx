import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/store.services";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct() {
    const data = await fetchProductById(id);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {!product ? (
        "Loading..."
      ) : (
        <div className="w-screen h-screen flex flex-col justify-start items-center gap-4">
          <h2 className="text-xl font-medium">{product.title.toUpperCase()}</h2>
          <img
            className="h-96 border shadow-lg"
            src={product.image}
            alt=""
          />
          <p>{product.price}</p>
          <p>{product.category.toUpperCase()}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
