import React from "react";

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return <h1 className="text-2xl">{title}</h1>;
}
