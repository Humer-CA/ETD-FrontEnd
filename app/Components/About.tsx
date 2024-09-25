import { Button, Image } from "@nextui-org/react";
import React from "react";
import { FaToolbox } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";

const About = () => {
  return (
    <div className="flex justify-center items-center gap-10 py-16">
      <div className="relative flex justify-center items-center ">
        <div className="absolute z-20 flex flex-col items-center justify-center rounded-lg p-2 text-white text-center mr-[-20px] bg-gradient-to-b from-primaryLight to-primaryDark shadow-lg">
          <p className="font-semibold text-2xl">10+</p>
          <span className="text-[8px] w-14">YEARS OF EXPERIENCE</span>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbGFyJTIwZWxlY3RyaWNpdHl8ZW58MHx8MHx8fDA%3D"
          alt="Image"
          width={250}
          height={320}
          className="object-cover z-0 opacity-70"
        />
        <Image
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29sYXIlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image"
          width={200}
          height={200}
          className="object-cover z-10 ml-[-20px] opacity-70"
        />
      </div>

      <div className="flex flex-col gap-4 max-w-[800px]">
        <h3 className="text-3xl font-bold text-slate-700">Our Services has been present for 5 years</h3>
        <p className="text-slate-400 font-light text-sm">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh vel rutrum, nisl nam nulla vestibulum tellus
          convallis dis. Consectetur et morbi hendrerit venenatis nam felis. Pulvinar scelerisque diam elementum
          consequat platea nibh elementum eget. Dui eget senectus erat a eleifend curabitur venenatis lectus
          pellentesque.
        </p>

        <div className="flex flex-col [&>div]:flex [&>div]:items-center [&>div]:gap-4 gap-2 [&>div]:font-bold [&>div]:text-slate-600">
          <div>
            <Button isIconOnly isDisabled className="bg-blue-50">
              <GiSolarPower className="text-3xl text-primaryDark" />
            </Button>
            Full Electrical Services
          </div>

          <div>
            <Button isIconOnly isDisabled className="bg-blue-50">
              <FaToolbox className="text-2xl text-primaryDark" />
            </Button>
            Reliability of the Items
          </div>

          <p className="text-slate-400 font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit accumsan enim vitae lobortis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
