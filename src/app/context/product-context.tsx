"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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

interface ProductsContextProps {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
  initialProducts?: Product[];
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
  initialProducts = [],
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProducts = localStorage.getItem("products");
      if (savedProducts) {
        const savedProductsArray: Product[] = JSON.parse(savedProducts);

        // Remove duplicates
        const uniqueProducts = [
          ...initialProducts,
          ...savedProductsArray.filter(
            (savedProduct) =>
              !initialProducts.some(
                (initialProduct) => initialProduct.id === savedProduct.id
              )
          ),
        ];

        setProducts(uniqueProducts);
      } else {
        setProducts(initialProducts);
        localStorage.setItem("products", JSON.stringify(initialProducts));
      }
    }
  }, [initialProducts]);

  const addProduct = (product: Omit<Product, "id">) => {
    setProducts((prevProducts) => {
      const newId = prevProducts.length
        ? Math.max(...prevProducts.map((p) => p.id)) + 1
        : 1; // Start from 1 if no products exist

      const newProduct = { ...product, id: newId };
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
