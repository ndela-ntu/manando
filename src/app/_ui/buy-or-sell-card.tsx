import React from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

type Props = {
  cardType: "Buy" | "Sell";
};

export default function BuyOrSellCard({ cardType }: Props) {
  return (
    <div>
      <Image
        src="/IMG-20240425-WA0003.jpg"
        width={350}
        height={500}
        alt={`Image of ${cardType === "Buy" ? "buy" : "sell"} icon`}
      />
      <Link href={`${cardType === "Buy" ? "/storefront" : "/sell"}`}>
        <Button className="w-full">{cardType === "Buy" ? "Shop" : "Sell"}</Button>
      </Link>
    </div>
  );
}
