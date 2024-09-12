"use client";

import React from "react";
import Image from "next/image";
import etdLogo from "../../public/Images/ETD.svg";
import heroImg from "../../public/Images/Hero Img1.jpg";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
import { LuMenu, LuSearch } from "react-icons/lu";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex items-center justify-around gap-4">
        <Image src={etdLogo} alt="logo" className="object-contain w-32 py-2" />
        <div className="flex items-center justify-center gap-20 sm:hidden md:flex ">
          <ul className="flex gap-8">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/category" className="">
              Category
            </Link>
            <Link href="/pricing" className="">
              Pricing
            </Link>
            <Link href="/inquiry" className="">
              Inquire
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/contact" className="">
              Contact
            </Link>
          </ul>

          <div className="flex items-center gap-4">
            <Input
              type="text"
              variant="flat"
              radius="lg"
              startContent={<LuMenu size={30} className="bg-transparent" />}
            />
            <Button
              onClick={() => router.push("/login")}
              radius="lg"
              className="bg-gradient-to-tr from-primaryLight to-primaryDark text-white shadow-lg"
            >
              Sign In
            </Button>
          </div>
        </div>

        <Button className="sm:flex md:hidden" isIconOnly>
          <LuMenu size={30} className="bg-transparent" />
        </Button>
      </nav>

      <section className="relative h-full">
        <div className="flex flex-col justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center m-auto">
            <div className="flex flex-col items-center justify-center max-w-[1200px] gap-5 text-lightgray">
              <p className="font-bold text-lg">ETD SOLAR</p>
              <p className="font-bold text-5xl text-white">Get Solar Powered Now</p>
              <p className=" text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit accumsan enim vitae lobortis.
                Morbi tempor, tellus quis bibendum ornare, nulla nunc pulvinar mi, a consequat dolor orci sed erat.
              </p>

              <div>
                <Button variant="shadow" color="primary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-slate-500 z-[-1] flex max-h-[950px]">
            <Image src={heroImg} alt="logo" className="object-cover object-bottom mix-blend-multiply" />
          </div>
        </div>
      </section>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashboard;
