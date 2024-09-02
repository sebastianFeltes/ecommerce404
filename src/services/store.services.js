const rootUrl = "https://fakestoreapi.com/products";//endpoint URL

//OBTIENE LOS PRODUCTOS DE LA API
export async function fetchProducts() {
  let response = await fetch(rootUrl);
  let data = await response.json();
  return data;
}

//OBTIENE UN PRODUCTO POR ID DE LA API
export async function fetchProductById(productId) {
    let response = await fetch(`${rootUrl}/${productId}`);
    let data = await response.json();
    return data;
}
