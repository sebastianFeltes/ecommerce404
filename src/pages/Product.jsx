import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/store.services";
import { Car, Product } from "../utils/car";

function ProductDetail() {
  const { id } = useParams(); //ACCEDE AL ID DEL PRODUCTO PASADO POR PARAMETRO
  const [product, setProduct] = useState(null);

  async function getProduct() {
    //LLAMA AL SERVICIO PARA OBTENER EL PRODUCTO POR ID Y LO SETEA EN EL ESTADO DEL COMPONENTE
    const data = await fetchProductById(id);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  //FUNCION LOCAL PARA AGREGAR PRODUCTO AL CARRITO
  function addToCart(product) {
    // id, title, price, category, description, image, quantity
    //CREA UNA INSTANCIA DE PRODUCTO CON LA INFORMACION DEL PRODUCTO
    const newProduct = new Product(
      product.id,
      product.title,
      product.price,
      product.category,
      product.description,
      product.image,
      1
    );
    //OBTIENE LOS DATOS DEL CARRITO DEL LOCALSTORAGE Y CONSTRUYE UNA INSTANCIA DE CAR
    const carData = JSON.parse(window.localStorage.getItem("car"));
    // CREA UNA INSTANCIA DE CAR CON LOS PRODUCTOS DEL CARRIT0
    const car = new Car(carData.products, carData.total, carData.quantity);
    // AGREGA EL PRODUCTO NUEVO AL CARRITO Y GUARDA LOS NUEVOS DATOS EN EL LOCALSTORAGE
    car.addToCar(newProduct);
    window.localStorage.setItem("car", JSON.stringify(car));
  }

  return (
    <div>
      {!product ? ( // SI EL PRODUCTO NO ESTA CARGADO, MUESTRA UN MENSAJE
        <div className="flex items-center justify-center h-screen w-screen text-5xl text-slate-700 font-bold">
          Cargando info del producto...
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col justify-start items-center gap-4">
          <h2 className="text-xl font-medium">{product.title.toUpperCase()}</h2>
          <img className="h-96 border shadow-lg" src={product.image} alt="" />
          <p>{product.price}</p>
          <p>{product.category.toUpperCase()}</p>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full border rounded-lg hover:bg-gray-400"
          >
            Agregar al carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
