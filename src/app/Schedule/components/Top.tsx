import React from "react";
import { Plus } from "../../../../public/icons/Svg";

const Top = () => {
  return (
    <div className="mt-8.5 ml-7.5 flex justify-start items-center">
      <h1 className="text-[#030229] font-bold text-2xl leading-[100%]">
        Schedule List
      </h1>
      <div className="w-[122px] h-[40px] rounded-[10px] px-4 flex gap-2.5 items-center justify-start bg-[#605BFF] ml-[892px]">
        <Plus />
        <button className="text-sm font-semibold leading-[100%] text-white">
          Add New
        </button>
      </div>
    </div>
  );
};

export default Top;
