import React from "react";

function TierList({ tierRows, removeFromTier }) {
  return (
    <div>
      <h1 className="font-extrabold ">insert DaTierList</h1>
      {Object.keys(tierRows).map((tierLetter, i) => {
        return (
          <div
            key={tierLetter}
            className="bg-neutral-700 border-solid border-2 border-black flex "
          >
            <div className="border-4 border-indigo-500/100  row-span-1  text-5xl font-thin not-italic font-sans order-first  bg-teal-900 drop-shadow-lg size-48 flex items-center justify-center">
              <p className="font-semibold text-black ">{tierLetter}</p>
            </div>

            <ul className="flex justify-start">
              {tierRows[tierLetter].map((operators) => {
                return (
                  <li key={operators.id}>
                    <img
                      onClick={() => console.log("clicked ", operators.id)}
                      className={
                        "object-contain h-15 w-15 flex-initial border-solid border-2 border-white relative"
                      }
                      src={operators.image}
                      alt=""
                    />
                    <button
                      onClick={() => removeFromTier(operators.id, tierLetter)}
                      className="text-xl from-neutral-100 hover:text-sky-700  z-40  top-0 right-0  "
                    >
                      X
                    </button>
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
