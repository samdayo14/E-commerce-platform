"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "./input";
import { addNewProduct } from "../utils/fetch-product";
import { useProducts } from "../context/product-context";

export default function ProductForm() {
  const { addProduct } = useProducts();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    id: 0,
    category: 0,
    description: "",
    image: "",
    rating: {
      rate: 0
    }
  });
  const [image, setImage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setImage(URL.createObjectURL(file));
      setFormData((prevData) => ({
        ...prevData,
        image: file.name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newProduct = await addNewProduct(formData);
      addProduct({ ...formData, id: newProduct.id });

    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add / Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            placeholder="Product Name"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Input
            placeholder="Product Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            className="input-style"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: Number(e.target.value) })
            }
          >
            <option value={0}>Men Clothing</option>
            <option value={1}>Women Clothing</option>
            <option value={2}>Jewelry</option>
            <option value={3}>Electronics</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            className="input-style resize-none h-16 text-base"
            placeholder="Enter Description.."
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-style"
          />
          {image && (
            <div className="mt-2">
              <Image
                width={200}
                height={200}
                src={image}
                alt="Preview"
                className="object-cover rounded-md border border-gray-200 shadow-sm"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-orange-500 w-full transition-all"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
