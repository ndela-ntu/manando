"use client";

import React, { useEffect, useState } from "react";
import Header from "../_ui/store-front/header";
import Link from "next/link";
import CartIcon from "../_ui/store-front/cart-icon";
import { Button } from "../_ui/button";
import "@aws-amplify/ui-react/styles.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header hideSignIn />
      <div>{children}</div>
    </div>
  );
}

/*<Link
        className="fixed bottom-5 right-5 flex h-10 w-1/12 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        href="/storefront/cart"
      >
      </Link>*/
