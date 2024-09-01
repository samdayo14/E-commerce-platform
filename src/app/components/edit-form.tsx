"use client";
import React, { useState } from "react";
import Input from "./input";
import { Product } from "../utils/fetch-product";

interface EditFormProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onSave: (updatedProduct: Product) => void;
}

const EditForm: React.FC<EditFormProps> = ({
  isOpen,
  onClose,
  product,
  onSave,
}) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);

  if (!isOpen) return null;

  const handleSave = () => {
    const updatedProduct = {
      ...product,
      title,
      price,
      description,
      category,
      image,
    };
    onSave(updatedProduct);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Product Name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Product Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded imput-style"
                placeholder="Enter Description..."
              />
            </div>
            <div>
              <select
                className="input-style"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={"Men Clothing"}>Men Clothing</option>
                <option value={"Women Clothing"}>Women Clothing</option>
                <option value={"Jewelry"}>Jewelry</option>
                <option value={"Electronics"}>Electronics</option>
              </select>
            </div>
            <div>
              <Input
                placeholder="Image URL"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
