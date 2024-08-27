// import Image from "next/image";

// export interface Product {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   price: string;
//   category: string;
// }

// interface ProductsPageProps {
//   products: Product[];
// }

// export default function ProductCard({ products }: ProductsPageProps) {
//   const categories = [
//     { cat: "All" },
//     { cat: "Men's Clothing" },
//     { cat: "Women Clothing" },
//     { cat: "Jewellry" },
//     { cat: "Electronics" },
//   ];

//   return (
//     <>
//       <div className="flex gap-4 items-center justify-center mt-10">
//         {categories.map((item, index) => (
//           <button
//             className="text-lg font-semibold border-2 border-solid border-black py-2 px-4 text-center rounded-lg hover:bg-orange-500 hover:text-white hover:border-none"
//             key={index}
//           >
//             {item.cat}
//           </button>
//         ))}
//       </div>

//       <div className="pt-7 grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 text-center">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="h-[100%] md:w-[285px] w-[190px] rounded overflow-hidden shadow-lg border border-gray-400"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={500}
//               height={100}
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold md:text-xl text-sm mb-2">
//                 {product.title}
//               </div>
//               <p className="text-black text-xl font-bold pb-4">
//                 ${product.price}
//               </p>
//               <a className="text-xl cursor-pointer font-medium border border-black rounded-lg p-2 hover:bg-orange-500 hover:text-white">
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: string;
}

interface ProductsPageProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductsPageProps) {
  const categories = [
    { cat: "All" },
    { cat: "Men's Clothing" },
    { cat: "Women Clothing" },
    { cat: "Jewellry" },
    { cat: "Electronics" },
  ];

  return (
    <>
      <div className="flex gap-4 items-center justify-center mt-10">
        {categories.map((item, index) => (
          <button
            className="text-lg font-semibold border-2 border-solid border-black py-2 px-4 text-center rounded-lg hover:bg-orange-500 hover:text-white hover:border-none"
            key={index}
          >
            {item.cat}
          </button>
        ))}
      </div>

      <div className="pt-7 grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 text-center">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="h-[100%] md:w-[285px] w-[190px] rounded overflow-hidden shadow-lg border border-gray-400"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={100}
              />
              <div className="px-6 py-4">
                <div className="font-bold md:text-xl text-sm mb-2">
                  {product.title}
                </div>
                <p className="text-black text-xl font-bold pb-4">
                  ${product.price}
                </p>
                <a className="text-xl cursor-pointer font-medium border border-black rounded-lg p-2 hover:bg-orange-500 hover:text-white">
                  Buy Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}
