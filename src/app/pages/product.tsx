import { GetStaticProps } from "next";
import ProductCard from "../components/product-card";

interface ProductsPageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default function Product({ products }: ProductsPageProps) {
  return (
    <>
      <ProductCard products={products} /> <p>www</p>
    </>
  );
}
