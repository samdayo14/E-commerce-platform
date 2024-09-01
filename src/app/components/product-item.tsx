"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useProducts } from "../context/product-context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditForm from "./edit-form";
import { Product } from "../utils/fetch-product";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteProduct, editProduct } = useProducts();

  let imageSrc = product.image || "";

  if (
    !imageSrc.startsWith("blob:") &&
    !imageSrc.startsWith("http") &&
    !imageSrc.startsWith("/")
  ) {
    imageSrc = `/${imageSrc}`;
  }

  const handleDelete = async () => {
    try {
      deleteProduct(product.id);
      toast.success("Product Deleted!");
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  const handleSave = async (updatedProduct: Product) => {
    try {
      editProduct(updatedProduct);
      toast.success("Product updated successfully!");
    } catch (error) {
      toast.error("Failed to update product.");
    }
  };

  return (
    <>
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            <FaEdit />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
          >
            <FaTrashAlt />
          </button>
        </div>
      </li>
      <EditForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        onSave={handleSave}
      />
    </>
  );
};

export default ProductItem;
