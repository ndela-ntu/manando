"use client";

import { useAppSelector } from "@/app/_lib/redux/hooks";
import React from "react";
import { Button } from "../../button";
import Link from "next/link";

type Props = {
  hideCheckoutButton: boolean;
};

export default function Summary({ hideCheckoutButton }: Props) {
  const productsInCart = useAppSelector((state) => state.cart.productsInCart);

  const total = productsInCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  const taxes = 0;

  return (
    <div className="p-10 w-1/2 h-full">
      <h2 className="text-2xl">Summary</h2>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h4>Subtotal</h4>
          <h4>R{total}</h4>
        </div>
        <div className="flex justify-between">
          <h4>Taxes</h4>
          <h4>R{taxes}</h4>
        </div>
        <div className="flex justify-between">
          <h4>Total</h4>
          <h4>R{total + taxes}</h4>
        </div>
        {!hideCheckoutButton && <Link
          href="/storefront/checkout"
          className="flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Go to Checkout
        </Link>}
      </div>
    </div>
  );
}
