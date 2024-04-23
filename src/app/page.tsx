import Link from "next/link";
import Navbar from "./_ui/store-front/navbar";
import Header from "./_ui/store-front/header";

import * as queries from "@/graphql/queries";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import config from "@/amplifyconfiguration.json";
import ProductsView from "./_ui/store-front/products-view";
const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export default async function Home() {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listProducts,
  });

  const products = data.listProducts.items;

  return (
    <>
      <div>
        <Header />
        <ProductsView products={products} />
      </div>
    </>
  );
}
