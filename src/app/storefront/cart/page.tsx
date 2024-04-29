import Cart from "@/app/_ui/store-front/cart/cart";
import Summary from "@/app/_ui/store-front/cart/summary";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex items-center justify-center">
      <Cart />
      <Summary />
    </div>
  );
}
