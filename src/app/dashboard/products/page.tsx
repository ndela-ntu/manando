import Heading from "@/app/_ui/heading";
import ProductsTable from "@/app/_ui/dashboard/products/products-table";
import Link from "next/link";

import * as queries from "@/graphql/queries";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import config from "@/amplifyconfiguration.json";
import { Suspense } from "react";
import { ProductsTableSkeleton2 } from "@/app/_ui/skeletons";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

type Props = {};

export default async function Page({}: Props) {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listProducts,
  });

  const products = data.listProducts.items;

  return (
    <>
      <Heading title="Products" />
      <div className="pt-10 pb-5">
        <Suspense fallback={<ProductsTableSkeleton2 />}>
          <ProductsTable products={products} />
        </Suspense>
      </div>
      <Link
        href="/dashboard/products/create"
        className="flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Add New
      </Link>
    </>
  );
}
