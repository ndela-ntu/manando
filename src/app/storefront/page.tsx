import * as queries from "@/graphql/queries";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import config from "@/amplifyconfiguration.json";
import ProductsView from "../_ui/store-front/products-view";
import Header from "../_ui/store-front/header";
import { Product } from "../_lib/definitions";
import { useContext, useEffect } from "react";
import { Button } from "../_ui/button";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export default async function Page() {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listProducts,
  });

  const products = data.listProducts.items;

  return (
    <div>
      <ProductsView products={products} />
    </div>
  );
}
