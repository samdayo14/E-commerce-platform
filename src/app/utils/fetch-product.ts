// utils/fetchProducts.ts
export async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
  