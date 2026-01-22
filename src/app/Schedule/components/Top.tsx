import React from "react";
import { Plus } from "../../../../public/icons/Svg";

const Top = () => {
  return (
    <div className="mt-23 md:mt-8.5 ml-4 md:ml-7.5 flex flex-col md:flex-row justify-start md:items-center gap-4 md:gap-0">
      <h1 className="text-[#030229] font-bold text-2xl leading-[100%]">
        Schedule List
      </h1>
      <div className="w-[122px] h-[40px] rounded-[10px] px-4 flex gap-2.5 items-center justify-start bg-[#605BFF] md:ml-[892px]">
        <Plus />
        <button className="text-sm font-semibold leading-[100%] text-white">
          Add New
        </button>
      </div>
    </div>
  );
};

export default Top;
