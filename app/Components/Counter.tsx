import { decrement, incrementAsync, incrementByAmount } from "@/Redux/State/counterSlice";
import { AppDispatch, RootState } from "@/Redux/State/store";
import { Button } from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="self-center ">
      <h2>{count}</h2>
      <div>
        <Button onClick={() => dispatch(incrementAsync(10))}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
