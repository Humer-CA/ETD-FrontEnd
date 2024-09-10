"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImg from "../../public/Images/Hero Img1.jpg";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { FaRegFileLines, FaSolarPanel } from "react-icons/fa6";
import { MdElectricBolt, MdPayments } from "react-icons/md";
import Navbar from "../Components/Navbar";
import CardSimple from "../Components/CardSimple";

const Dashboard = () => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isLg);
  return (
    <div>
      <Navbar />

      <section className="relative flex flex-col h-full gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="absolute flex items-center justify-center m-auto">
            <div className="flex flex-col items-center justify-center max-w-[1200px] gap-5 text-slate-200">
              <p className="font-bold text-lg">ETD SOLAR</p>
              <p className="font-bold text-3xl lg:text-6xl md:text-4xl sm:text-3xl xs:text-2xl text-white">
                Get Solar Powered Now
              </p>
              <p className="p-5 px-24 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit accumsan enim vitae lobortis.
                Morbi tempor, tellus quis bibendum ornare, nulla nunc pulvinar mi, a consequat dolor orci sed erat.
              </p>

              <div className="flex flex-col gap-6 justify-center items-center px-10">
                <Button color="primary" size="lg" className="w-40">
                  Learn More
                </Button>
                <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-50 rounded-xl p-5 gap-6 w-[250px] lg:w-[auto]">
                  <ul className="flex flex-col lg:flex-row gap-4 h-auto items-center justify-center text-slate-800 lg:h-12 [&>li>div]:flex lg:[&>li>div]:flex-row [&>li>div]:items-center [&>li>div]:gap-2 [&>li>p]:text-slate-500 [&>li>p]:text-sm">
                    <li>
                      <div>
                        <FaSolarPanel className="text-slate-500" />
                        <span>Solar Panels</span>
                      </div>
                      <p>Lorem ipsum odor amet.</p>
                    </li>
                    <Divider orientation={!isLg ? "horizontal" : "vertical"} />
                    <li>
                      <div>
                        <MdElectricBolt className="text-slate-500" />
                        <span>Inverter</span>
                      </div>
                      <p>Lorem ipsum odor amet.</p>
                    </li>
                    <Divider orientation={!isLg ? "horizontal" : "vertical"} />
                    <li>
                      <div>
                        <MdPayments className="text-slate-500" />
                        <span>Pricing</span>
                      </div>
                      <p>Lorem ipsum odor amet.</p>
                    </li>
                    <Divider orientation={!isLg ? "horizontal" : "vertical"} />
                    <li>
                      <div>
                        <FaRegFileLines className="text-slate-500" />
                        <span>Application</span>
                      </div>
                      <p>Lorem ipsum odor amet.</p>
                    </li>
                  </ul>
                  <Button color="primary" startContent={<LuSearch size={16} />} className="rounded-lg">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-500 z-[-1] flex h-[950px] lg:h-[750px]">
            <Image src={heroImg} alt="logo" className="object-cover object-bottom mix-blend-multiply" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl">Our Engineering Services</h3>
          <p className="p-5 px-24 text-center text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit accumsan enim vitae lobortis. Morbi
            tempor, tellus quis bibendum ornare.
          </p>
          <CardSimple />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
