import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Car } from "../utils/car";

function Cart() {
  const [cart, setCart] = useState(undefined);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const carData = JSON.parse(window.localStorage.getItem("car"));
    const car = new Car(carData.products, carData.total, carData.quantity);
    setCart(car);
    setProducts(car.getProducts());
    setTotal(car.getTotal());
    setQuantity(car.getQuantity());
  }, []);
  
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex h-full">
        <section className="w-3/4 border-r-2 h-full">
          <ul className="p-2 gap-2 flex flex-col flex-wrap">
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <li
                  className="flex border w-full h-32 p-2 gap-2 items-center justify-center rounded-lg shadow-xl"
                  key={index}
                >
                  <img className="w-16 borderp-2" src={product.image} />
                  <span className="text-center font-medium">
                    {product.title}
                  </span>
                  <span className="text-xl">$ {product.price}</span>
                  <span className="text-xl">Cantidad: {product.quantity}</span>
                </li>
              ))
            ) : (
              <li>No hay productos</li>
            )}
          </ul>
        </section>
        <aside className="w-1/4 border-l-2 h-full">
          <h3>Total: {total}</h3>
          <h3>Cant. items:{quantity}</h3>
        </aside>
      </main>
    </div>
  );
}

export default Cart;
