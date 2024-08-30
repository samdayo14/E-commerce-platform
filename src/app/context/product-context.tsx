"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: number;
  rating: {
    rate: number;
  };
}

interface ProductContextType {
  products: Product[];
  addProduct: (newProduct: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({
  children,
  initialProducts = [],
}: {
  children: ReactNode;
  initialProducts?: Product[];
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
