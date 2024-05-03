"use client";

import { Input, Label, TextAreaField } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import { ProductState, createProduct, updateProduct } from "@/app/_lib/actions";
import { useRouter } from "next/navigation";
import { Product } from "@/app/_lib/definitions";

type Props = {
  product: Product;
};

export default function EditForm({ product }: Props) {
  const formStatus = useFormStatus();
  const router = useRouter();

  const [file, setFile] = useState<File | undefined>(undefined);

  const initialState = { message: null, errors: {}, success: false };
  const editProductWithProduct = updateProduct.bind(null, product);
  const [state, dispatch] = useFormState<ProductState, FormData>(
    editProductWithProduct,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard/products");
      router.refresh();
    }
  }, [router, state]);

  if (formStatus.pending) {
    return <h1>Loading...</h1>;
  }

  return (
    <form
      action={(formData) => {
        if (file) {
          formData?.set("image", URL.createObjectURL(file));
        } else {
          formData?.set("image", product.image);
        }
        dispatch(formData);
      }}
    >
      <div className="flex flex-col mt-5 rounded-md border border-black p-8">
        <div className="flex flex-col mb-4">
          <div className="flex items-center h-80 rounded-sm border border-black justify-center relative">
            <Image
              src={file ? URL.createObjectURL(file) : product.image}
              width={200}
              height={200}
              alt="Image of item"
            />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              aria-describedby="url-error"
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 file-input file-input-bordered file-input-sm w-full max-w-xs place-content-center"
              onChange={(e) => {
                setFile(e.target.files![0]);
              }}
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image &&
              state.errors.image.map((error: string, i) => (
                <p key={i} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
          <Label htmlFor="name" className="">
            Name:
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            defaultValue={product.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string, i) => (
                <p key={i} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <TextAreaField
            label="Description:"
            name="description"
            id="description"
            placeholder="Description"
            rows={3}
            defaultValue={product.description}
          />
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string, i) => (
                <p key={i} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <Label htmlFor="price" className="">
            Price:
          </Label>
          <Input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            className="input input-bordered"
            defaultValue={product.price}
          />
          <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string, i) => (
                <p key={i} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <Label htmlFor="quantity" className="">
            Quantity:
          </Label>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            className="input input-bordered"
            defaultValue={product.quantity}
          />
          <div id="quantity-error" aria-live="polite" aria-atomic="true">
            {state.errors?.quantity &&
              state.errors.quantity.map((error: string, i) => (
                <p key={i} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>
        <button
          className="btn h-10 text-sm text-white transition-colors hover:bg-[#326AE2] bg-[#2563EB] rounded-md"
          disabled={formStatus.pending}
          type="submit"
        >
          {formStatus.pending ? "Saving" : "Save"}
        </button>
      </div>
    </form>
  );
}
