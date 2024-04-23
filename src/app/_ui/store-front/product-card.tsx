import { Product } from "@/app/_lib/definitions";
import React from "react";
import Image from "next/image";
import { Button } from "../button";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative flex flex-col rounded-lg border border-black p-5">
      <div className="flex items-center justify-center h-72">
        <Image
          src={product.image}
          alt="Image of product"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-between py-5 h-16">
        <h3 className="text-xl">{product.name}</h3>
        <h3 className="font-medium">R{product.price}</h3>
      </div>
      <p className="text-sm pb-10 h-32">{product.description}</p>
      <Button className="absolute bottom-5">Add to Cart</Button>
    </div>
  );
}
