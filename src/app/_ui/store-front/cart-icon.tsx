import { useAppDispatch, useAppStore, useAppSelector } from "@/app/_lib/redux/hooks";
import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function CartIcon() {
  const store = useAppStore();
  const productsInCartIds = useAppSelector(state => state.cart.productsInCart);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center">
      <span className="px-2">Cart</span>
      <CiShoppingCart size={25} />
      <span>{productsInCartIds.length}</span>
    </div>
  );
}
