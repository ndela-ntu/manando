import React from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";

type Props = {
  cardType: "Shop" | "Sell";
};

export default function BuyOrSellCard({ cardType }: Props) {
  return (
    <div>
      <Link href={`${cardType === "Shop" ? "/storefront" : "/sell"}`}>
        {cardType === "Shop" ? (
          <div className="border border-[#cae4f7] rounded-lg bg-sky-100 flex flex-col items-center justify-self-center p-10">
            <TiShoppingCart size={64} />
            <span>Shop</span>
          </div>
        ) : (
          <div className="border border-[#cae4f7] rounded-lg bg-sky-100 flex flex-col items-center justify-self-center p-10">
            <GiTakeMyMoney size={64} />
            <span>Sell</span>
          </div>
        )}
      </Link>
    </div>
  );
}
