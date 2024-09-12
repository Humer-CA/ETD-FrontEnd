import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const list = [
  {
    title: "Power Systems Engineering",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
  },
  {
    title: "Circuit Design and Development",
    img: "/images/fruit-2.jpeg",
    price: "$3.00",
  },
  {
    title: "Control Systems Engineering",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
  },
  {
    title: "Electromagnetic Compatibility (EMC)",
    img: "/images/fruit-4.jpeg",
    price: "$5.30",
  },
  {
    title: "Power Quality and Protection",
    img: "/images/fruit-5.jpeg",
    price: "$15.70",
  },
  {
    title: "Renewable Energy Systems",
    img: "/images/fruit-6.jpeg",
    price: "$8.00",
  },
  {
    title: "Lighting Design and Analysis",
    img: "/images/fruit-7.jpeg",
    price: "$7.50",
  },
  {
    title: "Building Electrical Systems",
    img: "/images/fruit-8.jpeg",
    price: "$12.20",
  },
];

const CardSimple = () => {
  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4 px-10 min-w-[450px]">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex text-small items-start justify-between ">
            <b className="max-w-32 items-start text-left">{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardSimple;
