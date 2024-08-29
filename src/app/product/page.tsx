import Navbar from "@/app/components/navbar";
import ProductCard from "../components/product-card";
import { fetchProducts } from "../utils/fetch-product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Discover New Products",
};

export default async function Product() {
  const products = await fetchProducts();

  return (
    <>
      <Navbar />
      <ProductCard products={products} />
    </>
  );
}
