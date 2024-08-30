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
  addProduct: (product: Product) => void;
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
        const combinedProducts = initialProducts.concat(
          JSON.parse(savedProducts)
        );
        setProducts(combinedProducts);
      } else {
        setProducts(initialProducts);
        localStorage.setItem("products", JSON.stringify(initialProducts));
      }
    }
  }, [initialProducts]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
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
