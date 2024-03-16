import React from "react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";
function TierList({ tierRows, removeFromTier }) {
  return (
    <div className="">
      <h1 className="font-extrabold ">DaTierList</h1>
      {Object.keys(tierRows).map((tierLetter, i) => {
        return (
          <div
            key={tierLetter}
            className="bg-neutral-700 border-solid border-2 border-black flex max-h-40"
          >
            <div className="row-span-1  text-5xl font-thin not-italic font-sans order-first  bg-gradient-to-br from-white to-slate-400 drop-shadow-lg size-36 flex items-center justify-center">
              <p className="font-semibold text-black ">{tierLetter}</p>
            </div>

            <ul className="flex justify-start">
              {tierRows[tierLetter].map((operators) => {
                return (
                  <li key={operators.id} className="group ">
                    <div className="relative outline-1 group">
                      <img
                        className={
                          "object-contain h-15 w-15 flex-initial  bg-gradient-to-br from-cyan-400 to-slate-500 max-h-36 "
                        }
                        src={operators.image}
                        alt=""
                      />
                      <XMarkIcon
                        onClick={() => removeFromTier(operators.id, tierLetter)}
                        className=" cursor-pointer h-7 w-7 font-black mx-2 my-2 from-neutral-100 hover:text-sky-700  z-40  top-0 right-0  absolute bg-slate-200  rounded-full opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default TierList;
