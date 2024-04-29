import React from "react";
import Navbar from "./navbar";
import ManandoAutoParts from "../manando-auto-parts";

type Props = {
  hideSignIn?: boolean;
};

const Header = ({ hideSignIn = false }: Props) => {
  return (
    <header className="flex justify-between items-center p-5 text-white bg-blue bg-blue-600 py-2">
      <ManandoAutoParts />
      {hideSignIn && <Navbar />}
    </header>
  );
};

export default Header;
