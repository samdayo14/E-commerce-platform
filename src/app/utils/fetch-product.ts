// utils/fetchProducts.ts
export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  data.unshift("All");
  return data;
}

export async function fetchSingleProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
}
