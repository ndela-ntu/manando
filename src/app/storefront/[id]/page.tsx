import React from "react";
import Image from "next/image";

import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import * as queries from "@/graphql/queries";

import config from "@/amplifyconfiguration.json";
import Heading from "@/app/_ui/heading";
import { notFound } from "next/navigation";
import { Button } from "@/app/_ui/button";
import ProductView from "@/app/_ui/store-front/product-view";
import { Product } from "@/app/_lib/definitions";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.getProduct,
    variables: {
      id: params.id,
    },
  });

  const product = data.getProduct;

  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
}
