import React from "react";
import { CiShoppingCart } from "react-icons/ci";

type Props = {
  itemCount: number;
};

export default function CartIcon({ itemCount }: Props) {
  return (
    <div className="flex justify-center items-center">
      <CiShoppingCart size={25}/>
      <span>{itemCount}</span>
    </div>
  );
}
