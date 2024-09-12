// "use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import etdLogo from "../../public/Images/ETD.svg";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = ["Home", "Pricing", "Inquire", "About", "Contact"];
  const SearchMenu = () => {
    return (
      <div className="flex items-center gap-4">
        <Input
          type="text"
          variant="flat"
          radius="lg"
          //   label="Search"
          placeholder="Search"
          startContent={<LuSearch size={20} className="bg-transparent text-slate-600" />}
        />
        {!isMenuOpen && (
          <Button
            onClick={() => router.push("/login")}
            radius="lg"
            className="bg-gradient-to-tr from-primaryLight to-primaryDark text-white shadow-lg"
          >
            Sign In
          </Button>
        )}
      </div>
    );
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-24">
      <NavbarContent className="w-full">
        <NavbarBrand>
          <Image src={etdLogo} alt="logo" className="object-contain w-32 py-2" />
        </NavbarBrand>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <SearchMenu />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex mt-8 p-4 gap-10">
        <NavbarMenuItem>
          <SearchMenu />
        </NavbarMenuItem>

        <NavbarContent className="w-full flex flex-col">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={"foreground"} className="w-full mb-2" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          {isMenuOpen && (
            <Button
              onClick={() => router.push("/login")}
              radius="lg"
              className="bg-gradient-to-tr from-primaryLight to-primaryDark text-white shadow-lg"
            >
              Sign In
            </Button>
          )}
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}
