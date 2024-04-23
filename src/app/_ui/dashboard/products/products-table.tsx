"use client";

import { Product } from "@/app/_lib/definitions";
import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import Image from "next/image";
import React from "react";
import { DeleteProduct, UpdateProduct } from "./buttons";

type Props = {
  products: Product[];
};

export default function ProductsTable({ products }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products && products.length > 0 ? (
          products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell width={150}>
                <Image src={product.image} alt="Image of product" width={75} height={75} />
              </TableCell>
              <TableCell width={250}>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell width={200}>{product.price}</TableCell>
              <TableCell width={200}>{product.quantity}</TableCell>
              <TableCell width={200}>
                <div className="flex flex-row space-x-5">
                  <UpdateProduct id={product.id} />
                  <DeleteProduct id={product.id} image={product.image} />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>No products to display</TableRow>
        )}
      </TableBody>
    </Table>
  );
}
