import React from "react";
import BuyOrSellCard from "./_ui/buy-or-sell-card";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex items-center justify-center space-x-10">
      <BuyOrSellCard cardType="Shop" />
      <BuyOrSellCard cardType="Sell" />
    </div>
  );
}
