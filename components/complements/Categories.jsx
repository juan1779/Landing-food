"use client";
import React from "react";
import Link from "next/link.js";
import { useState } from "react";
import { GetStaticProps } from "../Articles";

function Categories() {
  const [category, setCategory] = useState("Recetas");
  data.find((data) => {
    return data.category === category;
  });

  const handleClick = (e) => {
    setCategory(e.targat.value);
  };
  return (
    <section>
      <ul className="  flex flex-col pt-4 pl-4 pr-48 pb-40 gap-4 bg-base-600 rounded-md border-2 shadow-2xl ">
        <button onClick={handleClick} value="Recetas">
          <li className="active:text-base-300">TODOS</li>
        </button>
        <Link href="/">
          <li className="active:text-base-300">PRODUCTOS</li>
        </Link>
        <Link href="/">
          <li className="active:text-base-300">RECETAS</li>
        </Link>
        <Link href="/">
          <li className="active:text-base-300">CONSEJOS</li>
        </Link>
      </ul>
    </section>
  );
}

export default Categories;
