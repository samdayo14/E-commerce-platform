import React from "react";

export default function ProductItem() {
  return (
    <li className="flex justify-between items-center p-4 border rounded shadow-sm cursor-pointer">
      <div>
        <p className="font-medium text-lg">Sample Product</p>
        <p className="text-sm text-gray-500">$20.00</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </li>
  );
}
