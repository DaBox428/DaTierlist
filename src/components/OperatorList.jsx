import React from "react";
import { useState } from "react";
import { TrashIcon, CameraIcon } from "@heroicons/react/24/solid";

function OperatorList({
  list,
  SendToTier,
  tierRows,
  showRubbishBin,
  resetTierList,
  takeScreenshot,
  showCameraIcon,
}) {
  return (
    <>
      <div className="flex justify-end">
        <TrashIcon
          onClick={resetTierList}
          className={`bg-slate-400 px-1 py-1 w-16 h-16 my-4 mx-4 from-black rounded-full right-0 top-0 cursor-pointer ${
            showRubbishBin ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></TrashIcon>
        <CameraIcon
          onClick={takeScreenshot}
          className={`bg-slate-400 px-1 py-1 w-16 h-16 my-4 mx-4 from-black rounded-full right-0 top-0 cursor-pointer ${
            showCameraIcon ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></CameraIcon>
      </div>

      <div className="flex grow flex-row ">
        <br />
        {list.map(function (data) {
          return (
            <div key={data.id} className="">
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
    </>
  );
}

function OperatorCard({ data, SendToTier, tierRows }) {
  const [isOperatorListDropdownVisible, setIsOperatorListDropdownVisible] =
    useState(false);

  return (
    <div className="relative group  z-20 ">
      <img
        src={data.image}
        alt=""
        className=" bg-gradient-to-br from-orange-500 to-orange-900 relative"
      />

      <div className="  z-40 absolute top-0 right-0  flex-col flex-wrap grow-0 col-span-1 hidden group-hover:block">
        <button
          onClick={() =>
            setIsOperatorListDropdownVisible(!isOperatorListDropdownVisible)
          }
          className="text-2xl font-black hover:text-sky-700 bg-slate-50 px-3 py-3 rounded-full  top-auto right-auto grow-0  "
        >
          +
        </button>

        {isOperatorListDropdownVisible && (
          <ul className=" bg-gradient-to-br from-cyan-400 to-slate-500 py-4 px-4 rounded-lg  border border-black">
            {Object.keys(tierRows).map((tierLetter, i) => {
              return (
                <li
                  className="hover:bg-sky-700 rounded-lg py-3 px-3 border my-3 bg-gradient-to-br from-orange-500"
                  key={data.id + tierLetter}
                  onClick={() => SendToTier(data.id, tierLetter)}
                >
                  Send to: {tierLetter}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OperatorList;
