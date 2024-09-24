import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <h3 className="font-bold text-3xl text-slate-700">Our Engineering Services</h3>
      <p className="p-5 px-24 text-center text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit accumsan enim vitae lobortis. Morbi
        tempor, tellus quis bibendum ornare.
      </p>
      <CardLayout />
    </div>
  );
};
export default Services;

interface CardItems {
  title: string;
  img: string;
  price: string;
  link: string;
}

const list: CardItems[] = [
  {
    title: "Power Systems Engineering",
    img: "https://images.unsplash.com/photo-1650698877967-734f036a0c08?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1650698877967-734f036a0c08?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$5.50",
  },
  {
    title: "Circuit Design and Development",
    img: "https://images.unsplash.com/photo-1501696226977-1fbff6555a97?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1501696226977-1fbff6555a97?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$3.00",
  },
  {
    title: "Control Systems Engineering",
    img: "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$10.00",
  },
  {
    title: "Electromagnetic Compatibility (EMC)",
    img: "https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$5.30",
  },
  {
    title: "Power Quality and Protection",
    img: "https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$15.70",
  },
  {
    title: "Renewable Energy Systems",
    img: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$8.00",
  },
  {
    title: "Lighting Design and Analysis",
    img: "https://images.unsplash.com/photo-1568146687696-427782f92379?q=80&w=1764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1568146687696-427782f92379?q=80&w=1764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$7.50",
  },
  {
    title: "Building Electrical Systems",
    img: "https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$12.20",
  },
];

export const CardLayout = () => {
  const router = useRouter();
  return (
    <div className="grid gap-4 grid-cols-1 p-2 w-[250px] place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:p-4 sm:px-10 sm:w-[80%] sm:max-w-[1500px] sm:min-w-[450px] overflow-auto">
      {list.map((item, index) => (
        <Card
          className="hover:bg-yellow-100 group"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => router.push(item.link)}
        >
          <CardBody className="overflow-visible p-0">
            <div className="relative overflow-hidden rounded-lg opacity-85">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[150px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={item.img}
              />
            </div>
          </CardBody>
          <CardFooter className="flex text-small [&>*]:h-16 [&>*]:w-full">
            <b className="max-w-32 text-left ">{item.title}</b>
            <p className="text-right text-slate-600 font-bold">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
