import Navbar from "@/app/components/navbar";
import ProductCard from "../../components/product-card";
import { fetchProducts } from "../../utils/fetch-product";

export default async function Product() {
  const products = await fetchProducts();

  return (
    <>
      <Navbar />
      <ProductCard products={products} />
    </>
  );
}
