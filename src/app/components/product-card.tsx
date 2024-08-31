"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useProducts } from "../context/product-context";
import { fetchCategories } from "../utils/fetch-product";
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

export default function ProductCard() {
  const { products } = useProducts();
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function getCategories() {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    }

    getCategories();
  }, []);

  // Consolidate filtering logic into one effect
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filteredData = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filteredData);
    }
  }, [products, selectedCategory]);

  const handleFilterCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h2 className="text-4xl text-orange-500 font-semibold text-center">
        Latest Product
      </h2>
      <div className="flex md:gap-4 gap-2 justify-start overflow-x-auto mt-10  md:justify-center">
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

      <div className="pt-7 grid-cols-2 grid md:grid-cols-2 md:ml-14 lg:grid-cols-4 md:gap-4 gap-2 text-center lg:ml-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="h-[100%] w-[200px] md:w-[285px] rounded overflow-hidden shadow-lg border border-gray-400"
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
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </>
  );
}
