import React from "react";
import Image from "next/image";
import { Product } from "../context/product-context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  let imageSrc = product.image;

  if (
    !imageSrc.startsWith("blob:") &&
    !imageSrc.startsWith("http") &&
    !imageSrc.startsWith("/")
  ) {
    // Assuming the image is from the public folder or is a relative path
    imageSrc = `/${imageSrc}`;
  }
  return (
    <li className="flex justify-between items-center p-4 border rounded shadow-sm cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="h-[50px] w-[50px]">
          <Image
            src={imageSrc}
            alt={product.title || "Product image"}
            width={100}
            height={100}
            className="object-cover rounded"
          />
        </div>
        <div>
          <p className="font-medium text-xl uppercase">{product.category}</p>
          <p className="font-medium text-lg capitalize">{product.title}</p>
          <p className="text-sm text-gray-500 w-[200px] truncate">
            {product.description}
          </p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row space-x-2">
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <FaEdit />
        </button>
        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
