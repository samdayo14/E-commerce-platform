"use client";

import Image from "next/image";
import { fetchCategories, fetchProducts } from "../utils/fetch-product";
import { useEffect, useState } from "react";
import Link from "next/link";

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

interface ProductsPageProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductsPageProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    async function getCategories() {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    }

    getCategories();
  }, []);

  async function filterProducts(category: string) {
    const products: Product[] = await fetchProducts();
    const data = products.filter(
      (product: Product) => product.category === category
    );
    return data;
  }

  const handleFilterCategory = async (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      const allProducts = await fetchProducts();
      setFilteredProducts(allProducts);
    } else {
      const filteredData = await filterProducts(category);
      setFilteredProducts(filteredData);
    }
  };

  return (
    <>
      <h2 className="text-4xl text-orange-500 font-semibold text-center">
        Latest Product
      </h2>
      <div className="flex gap-4 items-center justify-center mt-10">
        {categories.map((cat) => (
          <button
            className={`text-lg font-semibold border-2 border-solid border-black py-2 px-4 text-center rounded-lg ${
              selectedCategory === cat ? "bg-orange-500 text-white" : ""
            } hover:bg-orange-500 hover:text-white hover:border-none`}
            onClick={() => handleFilterCategory(cat)}
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pt-7 grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 text-center ml-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="h-[100%] md:w-[285px] w-[190px] rounded overflow-hidden shadow-lg border border-gray-400"
          >
            <div className="h-[250px] w-[190px] mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold md:text-xl text-sm mb-2">
                {product.title.substring(0, 12)}...
              </div>
              <p className="text-black text-xl font-bold pb-4">
                ${product.price}
              </p>
              <Link
                href={`/product-details/${product.id}`}
                className="text-xl cursor-pointer font-medium border border-black rounded-lg p-2 hover:bg-orange-500 hover:text-white"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
