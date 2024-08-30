"use client";

import React from "react";
import ProductItem from "./product-item";
import { useProducts } from "../context/product-context";

export default function ProductList() {
  const { products } = useProducts();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}
