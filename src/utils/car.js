// window.localStorage.setItem("car", []);
//CREA UNA CLASE PRODUCTO QUE RECIBIRA COMO PARAMETROS:
//ID, TITULO, PRECIO, CATEGORIA, DESCRIPCION, CANTIDAD E IMAGEN
export class Product {
  constructor(id, title, price, category, description, image, quantity) {
    this.id = id; //1
    this.title = title; //yerba
    this.price = price; //10
    this.category = category; //almacen
    this.description = description;
    this.image = image;
    this.quantity = quantity; //3
    this.subtotal = price * quantity; //30
  }
}

//CREA UNA CLASE CAR (CARRITO) QUE TENDRA COMO PROPIEDADES:
//PRODUCTOS (ARRAY), TOTAL (NUMERO), CANTIDAD (NUMERO)
export class Car {
  constructor(products, total, quantity) {
    this.products = products || [];
    this.total = total || 0;
    this.quantity = quantity || 0;
  }

  //METODOS PARA EL CARRITO "EL AGREGAR PRODUCTO AL CARRITO"
  addToCar(newProduct) {
    let existe = this.products.some((product) => product.id === newProduct.id);
    if (existe) {
      //SI EL PRODUCTO YA EXISTE EN EL CARRITO, AUMENTA LA CANTIDAD Y EL SUBTOTAL
      this.products.map((product) => {
        if (newProduct.id === product.id) {
          product.quantity++;
          product.subtotal = product.price * product.quantity;
        }
        return product;
      });
    } else {
      //AGREGA UN PRODUCTO AL CARRITO SI NO EXISTE
      this.products.push(newProduct);
    }

    //ACTUALIZA EL TOTAL Y LA CANTIDAD DEL CARRITO
    this.total = this.products.reduce((acc, curr) => acc + curr.subtotal, 0);
    this.quantity = this.products.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  //EL METODO PARA EL CARRITO "ELIMINAR PRODUCTO DEL CARRITO"
  removeFromCar(productId) {
    //ELIMINA UN PRODUCTO DEL CARRITO BUSCANDO POR EL ID, DISMINUYENDO LA CANTIDAD
    //Y ACTUALIZANDO EL SUBTOTAL
    this.products = this.products.map((product, index) => {
      if (product.id === productId && product.quantity == 1) {
        return this.products.splice(index, 1);
      } else if (product.id === productId && product.quantity !== 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
          subtotal: product.price * (product.quantity - 1),
        };
      }
      /*  return product; */
    });
    this.total = this.products.reduce((acc, curr) => acc + curr.subtotal, 0);
    this.quantity = this.products.reduce((acc, curr) => acc + curr.quantity, 0);
  }
  //METODO PARA VACIAR TODO EL CARRITO
  unfillCar() {
    this.products = [];
    this.total = 0;
    this.quantity = 0;
  }

  //METODOS PARA EL CARRITO OBTENER INFORMACION DEL CARRITO:
  //TOTAL, CANTIDAD Y PRODUCTOS
  getTotal() {
    return this.total;
  }
  getQuantity() {
    return this.quantity;
  }
  getProducts() {
    return this.products;
  }
}
