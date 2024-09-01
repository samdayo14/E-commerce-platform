"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "./input";
import { useProducts } from "../context/product-context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductForm() {
  const { addProduct } = useProducts();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
    rating: {
      rate: 0,
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      const imageURL = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        image: imageURL,
      }));
      setImagePreview(imageURL);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.price.trim() ||
      !formData.category.trim() ||
      !formData.description.trim() ||
      !formData.image.trim()
    ) {
      toast.error("Please fill in all fields before submitting the form.");

      return;
    }
    try {
      // Prepare the product data without id
      const productWithoutId = {
        ...formData,
      };
      // Add product using the modified addProduct

      addProduct(productWithoutId);

      setFormData({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
        rating: {
          rate: 0,
        },
      });
      setImagePreview(null);
      toast.success("Product added successfully!");
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
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
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value={"Men Clothing"}>Men Clothing</option>
            <option value={"Women Clothing"}>Women Clothing</option>
            <option value={"Jewelry"}>Jewelry</option>
            <option value={"Electronics"}>Electronics</option>
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
          {imagePreview && (
            <div className="mt-2">
              <Image
                width={200}
                height={200}
                src={imagePreview}
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
      <ToastContainer />
    </div>
  );
}
