"use client";

import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../button";
import { Product } from "@/app/_lib/definitions";
import { useAppDispatch, useAppSelector, useAppStore } from "@/app/_lib/redux/hooks";
import { initialize } from "next/dist/server/lib/render-server";
import { add } from "@/app/_lib/redux/cartSlice";

type Props = {
  product: Product;
};

export default function ProductView({ product }: Props) {
  const productsInCart = useAppSelector(state => state.cart.productsInCart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center py-14">
        <div className="w-1/5 p-5">
          <h2 className="font-medium text-xl pb-5">{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div
          className="border border-[#cae4f7] bg-sky-100 flex items-center justify-center rounded-md w-1/4 p-5"
          style={{ position: "relative", width: "400px", height: "400px" }}
        >
          <Image
            src={product.image}
            alt="Image of product"
            sizes="400px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="w-1/5 p-5">
          <h2 className="font-medium text-xl pb-5">From R{product.price}</h2>
          <Button disabled={productsInCart.includes(product)} onClick={() => {
            dispatch(add(product));
          }}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
