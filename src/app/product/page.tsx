import Navbar from "@/app/components/navbar";
import ProductCard from "../components/product-card";
import { fetchProducts } from "../utils/fetch-product";
import { Metadata } from "next";
import { ProductsProvider } from "../context/product-context"; 

export const metadata: Metadata = {
  title: "Products",
  description: "Discover New Products",
};

export default async function Product() {
  const products = await fetchProducts();

  return (
    <ProductsProvider initialProducts={products}>
      {" "}
      {/* Wrap with ProductProvider */}
      <>
        <Navbar />
        <ProductCard />
      </>
    </ProductsProvider>
  );
}
