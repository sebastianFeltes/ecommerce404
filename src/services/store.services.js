const rootUrl = "https://fakestoreapi.com/products";

/* function fetchProducts() {
  return fetch(rootUrl)
    .then((response) => response.json())
    .then((productos) => console.log(productos));
} */

export async function fetchProducts() {
  let response = await fetch(rootUrl);
  let data = await response.json();
  return data;
}

export async function fetchProductById(productId) {
    let response = await fetch(`${rootUrl}/${productId}`);
    let data = await response.json();
    return data;
}
