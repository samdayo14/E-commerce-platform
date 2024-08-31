// utils/fetchProducts.ts
"use clients";

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: string;
  rating: {
    rate: number;
  };
}

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

// export async function fetchSingleProduct(id: number) {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const data = await res.json();
//   return data;
// }

export async function fetchSingleProduct(productId: number) {
  // Check local storage first
  const localProducts = JSON.parse(localStorage.getItem("products") || "[]");
  const localProduct = localProducts.find(
    (product: Product) => product.id === productId
  );

  if (localProduct) {
    return localProduct;
  }

  // If not found in local storage, fetch from API
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const productData = await response.json();
  return productData;
}

export async function addNewProduct(form: AddProduct) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(form),
  });
  const data = res.json();
  return data;
}
