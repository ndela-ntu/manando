import EditForm from "@/app/_ui/dashboard/products/edit-form";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import * as queries from "@/graphql/queries";

import config from "@/amplifyconfiguration.json";
import Heading from "@/app/_ui/heading";
import { notFound } from "next/navigation";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export default async function Page({ params }: { params: { id: string } }) {
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

  return (
    <div className="px-12 py-4">
      <Heading title="Edit Product" />
      <EditForm product={product} />
    </div>
  );
}
