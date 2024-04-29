"use client";

import { Product } from "@/app/_lib/definitions";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link";
import CartIcon from "./cart-icon";
import { Button } from "../button";

type Props = {
  products: Product[];
};

export default function ProductsView({ products }: Props) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
