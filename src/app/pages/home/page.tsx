import Navbar from "../../components/navbar";
import Image from "next/image";
import ProductCard from "../../components/product-card";
import { fetchProducts } from "@/app/utils/fetch-product";
import { GetStaticProps } from "next";

interface ProductsPageProps {
  products: Product[];
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <div className="flex flex-col gap-5">
        <section className="bg-[#fcf8f5] pb-10">
          <Navbar />
          <div className="px-20">
            <div className="flex justify-between">
              <div className="my-auto lg:w-[40%]">
                <h2 className="text-4xl font-bold text-orange-500">
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
        <section className="">
          <h2 className="text-4xl text-orange-500 font-semibold text-center">
            Latest Product
          </h2>
          <ProductCard products={products} />
          <hr className="mt-4 text-bold text-red-900" />
        </section>
      </div>
    </>
  );
}
