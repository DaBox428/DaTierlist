import React from "react";

function TierList({ tierRows, removeFromTier }) {
  return (
    <div>
      <h1 className="font-extrabold ">insert DaTierList</h1>
      {Object.keys(tierRows).map((tierLetter, i) => {
        return (
          <>
            <div
              className="bg-gray-700 border-solid border-2 border-sky-500 text-5xl font-thin not-italic font-sans"
              id={tierLetter}
            >
              <div className="border-4 border-indigo-500/100">
                <p className="font-extrabold ">{tierLetter}</p>
              </div>
              <ul className="inline-grid grid-cols-3 gap-4">
                {tierRows[tierLetter].map((operators) => {
                  return (
                    <li key={operators.id}>
                      <img
                        onClick={() => console.log("clicked ", operators.id)}
                        className={
                          "object-contain h-15 w-15 flex-initial border-solid border-2 border-red-900"
                        }
                        src={operators.image}
                        alt=""
                      />
                      <button
                        onClick={() => removeFromTier(operators.id, tierLetter)}
                        className="text-xl font-black hover:text-sky-700"
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default TierList;
