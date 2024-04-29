"use client";

import { Product } from "@/app/_lib/definitions";
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { Card } from "@aws-amplify/ui-react";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  return (
    <div>
      <Link href={`/storefront/${product.id}`}>
        <div className="flex flex-col justify-center items-center rounded-lg border border-[#cae4f7] bg-sky-100 p-6">
          <div
            className="flex items-center justify-center py-10"
            style={{ position: "relative", width: "250px", height: "250px" }}
          >
            <Image
              src={product.image}
              alt="Image of product"
              sizes="250px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-full flex justify-between items-center pt-5">
            <h3 className="text-xl">{product.name}</h3>
            <h3 className="font-medium text-lg">R{product.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
