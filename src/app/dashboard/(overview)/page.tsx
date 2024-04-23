import ProductsViewTable from "@/app/_ui/dashboard/products-view-table";
import Heading from "@/app/_ui/heading";

import * as queries from "@/graphql/queries";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import config from "@/amplifyconfiguration.json";
import { Suspense } from "react";
import { ProductsTableSkeleton1 } from "@/app/_ui/skeletons";
import { Product } from "@/app/_lib/definitions";

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
      <Heading title="Dashboard" />
      <div className="py-10">
        <Suspense fallback={<ProductsTableSkeleton1 />}>
          <ProductsViewTable products={products} />
        </Suspense>
      </div>
    </div>
  );
}
