import React from "react";
import { Button, Card, Chip } from "@nextui-org/react";
// import {Chip} from "@nextui-org/chip";

const Pricing = () => {
  return (
    <div className={`flex flex-col items-center justify-center gap-5 w-full py-16 bg-slate-100`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold text-3xl text-slate-700">Pricing</h3>
        <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <CardPrice />
    </div>
  );
};
export default Pricing;

const PRICE_ITEMS = [
  {
    title: "5",
    body: "Good for small houses and business",
    price: 230000,
    rating: 5,
  },
  {
    title: "8",
    body: "Good for houses for less expense",
    price: 300000,
    rating: 4.4,
  },
  {
    title: "10",
    body: "If you want to skip paying in your electric bill for you small houses and business",
    price: 450000,
    rating: 5,
  },
  {
    title: "20",
    body: "Recommended for business",
    price: 900000,
    rating: 4.7,
  },
  {
    title: "50",
    body: "Highly recommended for small to large businesses",
    price: 2350000,
    rating: 4.5,
  },
];

export const CardPrice = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 overflow-auto max-w-[1200px] p-2">
        {PRICE_ITEMS.map((item, index) => (
          <Card
            key={index}
            shadow={index === 2 ? "md" : "none"}
            className={`flex  w-[350px] p-4 gap-4 
              ${
                index === 2
                  ? "h-[350px] bg-gradient-to-tr from-primaryLight to-primaryDark text-white shadow-lg"
                  : "h-[320px]"
              }`}
          >
            <div className="flex flex-col gap-4 h-full">
              <Chip className={index === 2 ? "bg-white" : "bg-primary"}>
                <p className={`${index === 2 ? "text-slate-700 " : "text-white"} font-semibold`}>{index + 1}</p>
              </Chip>
              <div className="flex flex-col gap-1">
                <b>
                  {`${item.title} KW`} <span className="text-sm font-normal italic">(Kilowatts)</span>
                </b>
                <p className={`text-xs ${index === 2 ? "text-slate-400" : "text-slate-500"}`}>{item.body}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <span>⭐{item.rating}</span>
              <p className="text-sm">₱{item.price.toLocaleString()}</p>
            </div>
            <Button className={`h-12 font-semibold ${index === 2 && "text-primary bg-white"}`} color="primary">
              Apply Now
            </Button>
          </Card>
        ))}
        {/* <button className="mt-5 px-10 py-3 text-white font-bold bg-blue-500 hover:bg-blue-600">Purchase Now</button> */}
      </div>
    </>
  );
};
