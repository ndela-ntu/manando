import React from "react";
import Navbar from "./navbar";
import ManandoVehicleAppLabel from "../manando-vehicle-app-label";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center p-5">
      <ManandoVehicleAppLabel />
      <Navbar />
    </header>
  );
};

export default Header;
