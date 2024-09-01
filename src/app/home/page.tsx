import Navbar from "../components/navbar";
import Image from "next/image";
import ProductList from "../components/product-list";
import { fetchProducts } from "@/app/utils/fetch-product";
import { ProductProvider } from "../context/product-context";
import ProductCard from "../components/product-card";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <ProductProvider initialProducts={products}>
      <div className="flex flex-col gap-5">
        <section className="bg-[#fcf8f5] pb-10">
          <Navbar />
          <div className="px-7 md:px-10 lg:px-20">
            <div className="flex flex-col gap-5 md:flex-row justify-between">
              <div className="my-auto lg:w-[40%]">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-orange-500">
                  Discover the Best Deals on Your Favorite Products
                </h2>
                <p className="text-lg mt-2">
                  Shop from a wide range of categories and enjoy the convenience
                  of online shopping with unbeatable prices, fast delivery, and
                  seamless experiences.
                </p>
              </div>

              <Image
                src="/store-img.jpg"
                alt="store img"
                width={500}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section>
          <ProductCard />
          <hr className="mt-4 text-bold text-red-900" />
        </section>
      </div>
    </ProductProvider>
  );
}
