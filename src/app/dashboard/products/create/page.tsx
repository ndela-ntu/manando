import Heading from "@/app/_ui/heading";
import CreateForm from "@/app/_ui/dashboard/products/create-form";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="px-12 py-4">
      <Heading title="Create Product" />
      <CreateForm />
    </div>
  );
}
