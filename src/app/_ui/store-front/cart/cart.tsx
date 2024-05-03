'use client';

import { useAppDispatch, useAppSelector } from "@/app/_lib/redux/hooks";
import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { remove } from "@/app/_lib/redux/cartSlice";

type Props = {};

export default function Cart({}: Props) {
  const productsInCart = useAppSelector((state) => state.cart.productsInCart);
  const dispatch = useAppDispatch();

  return (
    <div className="p-10 w-1/2 h-full">
      <h2 className="text-2xl">Cart</h2>
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsInCart.length > 0 ? (
            productsInCart?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex">
                    <Image
                      src={product.image}
                      alt="Image of product"
                      width={100}
                      height={100}
                    />
                    <h2>{product.name}</h2>
                  </div>
                </TableCell>
                <TableCell>R{product.price}</TableCell>
                <TableCell>
                  <button onClick={() => {
                    dispatch(remove(product));
                  }} className="rounded-md border p-2 hover:bg-gray-100">
                    <span className="sr-only">Delete</span>
                    <Icon ariaLabel="delete" as={MdDelete} size={10} />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>Your cart is empty</TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
