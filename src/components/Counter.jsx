import React from "react";
import useCounterStore from "../store/useConterStore";

const Counter = () => {
  const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();

  const handleDecreasement = () => {
    decreaseCount();
  };
  const handleincreasement = () => {
    increaseCount(5);
  };
  const handleReset = () => {
    resetCount(0);
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen">
      <div className="bg-gray-300 shadow-lg rounded-lg p-8 w-[300px]">
        <h1 className="text-3xl text-center font-bold mb-10 ">Counter</h1>
        <div className="flex justify-between gap-3">
          <button
            onClick={handleincreasement}
            className="text-2xl font-bold rounded-md bg-red-500 size-10"
          >
            +
          </button>
          <span className="font-bold text-3xl text-center">{count}</span>
          <button
            onClick={handleDecreasement}
            className="font-bold text-3xl bg-green-400 size-10 rounded-md"
          >
            -
          </button>
        </div>
        <div
          onClick={handleReset}
          className="flex items-center justify-center mt-5 "
        >
          <button className=" font-bold text-2xl border-slate-900 border-2 p-1 rounded-md bg-slate-600 text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
