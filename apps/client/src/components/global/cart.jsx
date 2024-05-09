"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@app/client/components/ui/sheet";
import { useCart } from "@app/client/stores/cart-store";

import React from "react";
import ProductCard from "../products/product-card";
import CartProduct from "./cart-product";
import { ScrollArea } from "../ui/scroll-area";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@app/client/lib/utils";

export default function Cart() {
  const cart = useCart();
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <span>Open</span>
        <span className="absolute bg-red-500 top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full px-1">
          {cart.cartProducts.length}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <ScrollArea className="h-[calc(100vh_-_8rem)] pe-3">
            {cart.cartProducts.map((product) => (
              <CartProduct key={product} product={product} />
            ))}
            {!cart.cartProducts.length && (
              <div className="w-full h-full justify-center items-center">
                <h1>No Data</h1>
                <SheetTrigger className="relative" asChild>
                  <Button>Go To Shop</Button>
                </SheetTrigger>
              </div>
            )}
          </ScrollArea>
          <div className="">
            <Link className={cn(buttonVariants(), "w-full")} href={'/checkout'}>Checkout</Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
