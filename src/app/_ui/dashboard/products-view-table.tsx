"use client";

import { Product } from "@/app/_lib/definitions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import Image from "next/image";

type Props = {
  products: Product[];
};

export default function ProductsViewTable({ products }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products && products.length > 0 ? (
          products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.image}
                  alt="Image of product"
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>No products to display</TableRow>
        )}
      </TableBody>
    </Table>
  );
}
