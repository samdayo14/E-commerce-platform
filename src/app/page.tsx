import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Details about the product",
};
export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
