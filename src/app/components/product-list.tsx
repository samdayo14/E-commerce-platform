import React from "react";
import ProductItem from "./product-item";

export default function ProductList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <ul className="space-y-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </div>
  );
}
