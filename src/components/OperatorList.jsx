import React from "react";
import { useState } from "react";

function OperatorList({ list, SendToTier, tierRows }) {
  return (
    <div className="flex grow">
      {list.map(function (data) {
        return (
          <div key={data.id}>
            <OperatorCard
              key={data.id}
              data={data}
              SendToTier={SendToTier}
              tierRows={tierRows}
            />
          </div>
        );
      })}
    </div>
  );
}

function OperatorCard({ data, SendToTier, tierRows }) {
  const [isOperatorListDropdownVisible, setIsOperatorListDropdownVisible] =
    useState(false);

  return (
    <div className="relative group">
      <img
        src={data.image}
        alt=""
        className="py-4 px-4 bg-slate-300 -z-20 relative"
      />

      <div className="  z-40 absolute top-0 right-0  flex-col flex-wrap grow-0 col-span-1 hidden group-hover:block">
        <button
          onClick={() =>
            setIsOperatorListDropdownVisible(!isOperatorListDropdownVisible)
          }
          className="text-xl font-black hover:text-sky-700 bg-slate-50 px-3 py-3 rounded-lg  top-auto right-auto grow-0   "
        >
          \/
        </button>

        {isOperatorListDropdownVisible ? (
          <ul className=" bg-slate-50 py-4 px-4 rounded-lg  border border-black">
            {Object.keys(tierRows).map((tierLetter, i) => {
              return (
                <li
                  className="hover:bg-sky-700 rounded-lg py-3 px-3 border my-3"
                  key={data.id + tierLetter}
                  onClick={() => SendToTier(data.id, tierLetter)}
                >
                  Send to: {tierLetter}
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OperatorList;
