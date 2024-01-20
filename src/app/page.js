"use client";

import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import "./page.css"
import Provider from "@/context/Provider";
import Cart from "@/components/Cart/Cart";

export default function Home() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  )
}
