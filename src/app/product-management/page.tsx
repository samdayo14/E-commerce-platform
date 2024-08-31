import Navbar from "../components/navbar";
import Image from "next/image";
import ProductForm from "../components/product-form";
import ProductList from "../components/product-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Management",
  description: "Take Control Over Your Products",
};

export default async function productManagement() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mb-20">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Product Management
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductForm />
          <ProductList />
        </div>
      </div>
    </>
  );
}
