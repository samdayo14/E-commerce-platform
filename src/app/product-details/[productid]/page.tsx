"use client";

import Image from "next/image";
import { fetchSingleProduct } from "@/app/utils/fetch-product";
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "../../utils/fetch-product";

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  const productid = params.productid;

  useEffect(() => {
    if (productid) {
      const fetchProduct = async () => {
        try {
          const productData = await fetchSingleProduct(Number(productid));
          setProduct(productData);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      };

      fetchProduct();
    }
  }, [productid, params]);

  return (
    <>
      <Navbar />
      {product ? (
        <div className="flex flex-col gap-10 md:flex-row justify-between px-10 md:px-10 lg:px-40 mb-20">
          <div className="md:w-[40%] lg:w-[50%]">
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
          <div className="flex flex-col gap-4 md:w-[40%] lg:w-[30%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h2 className="text-orange-500 font-bold uppercase text-3xl">
                    {product.category}
                  </h2>
                  <h3 className="text-2xl font-medium">{product.title}</h3>
                </div>
                <span className="text-lg text-gray-500">
                  Rating {product.rating?.rate ?? 0} ⭐
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
