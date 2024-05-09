import React from "react";
import Cart from "./cart";

export default function Navbar() {
  return (
    <div className="w-screen  bg-slate-300 ">
      <div className="container flex justify-end px-2 py-4">
        <Cart />
      </div>
    </div>
  );
}
