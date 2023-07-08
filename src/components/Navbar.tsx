import React from "react";
import Container from "./Container";
import Link from "next/link";
import MainNav from "./MainNav";
import { getCategories } from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";

export default async function Navbar() {
  const { data: categories } = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl select-none">FAKE STORE</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
