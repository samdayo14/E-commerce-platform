import Image from "next/image";
import { fetchSingleProduct } from "@/app/utils/fetch-product";
import Navbar from "@/app/components/navbar";

export default async function ProductDetails() {
  const product = await fetchSingleProduct(10);

  return (
    <>
      <Navbar />
      {product ? (
        <div className="flex justify-between px-40 mb-20">
          <div className="w-[50%]">
            <Image
              key={product.id}
              src={product.image}
              alt={product.title}
              width={500}
              height={100}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 w-[30%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h2 className="text-orange-500 font-bold uppercase text-3xl">
                    {product.category}
                  </h2>
                  <h3 className="text-2xl font-medium">{product.title}</h3>
                </div>
                <span className="text-lg text-gray-500">
                  Rating {product.rating.rate} ⭐
                </span>
              </div>
              <h1 className="font-semibold text-4xl">${product.price}</h1>
            </div>
            <p>{product.description}</p>
            <button className="bg-orange-500 text-white rounded-lg py-2 px-4 mt-3 hover:bg-white hover:text-black hover:border hover:border-orange-500 hover:transition-all">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </>
  );
}
