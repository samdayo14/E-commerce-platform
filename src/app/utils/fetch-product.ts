// utils/fetchProducts.ts

export interface AddProduct {
  title: string;
  price: string;
  id: number;
  category: string;
  description: string;
  image: string;
}

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

export async function addNewProduct(form: AddProduct) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(form),
  });
  const data = res.json();
  return data;
}
