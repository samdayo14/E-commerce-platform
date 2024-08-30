import React from "react";
import Image from "next/image";
import { Product } from "../context/product-context";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="flex justify-between items-center p-4 border rounded shadow-sm cursor-pointer">
      <div className="flex items-center space-x-4">
        <Image
          src={`/images/${product.image}`}
          alt={product.title || "Product image"}
          width={100}
          height={100}
          className="object-cover rounded"
        />
        <div>
          <p className="font-medium text-lg capitalize">{product.title}</p>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
