import { Product } from "@/app/_lib/definitions";
import React from "react";
import ProductCard from "./product-card";

type Props = {
  products: Product[];
};

export default function ProductsView({ products }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
