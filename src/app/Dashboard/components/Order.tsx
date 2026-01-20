import React from "react";
import { Arrow, ThreeDot } from "../../../../public/icons/Svg";
import Image from "next/image";

const Order = () => {
  const orders = [
    {
      id: "#876364",
      name: "Camera Lens",
      image: "/Images/camera.png",
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
    },
    {
      id: "#876368",
      name: "Black Sleep Dress",
      image: "/Images/dress.png",
      price: "$14",
      totalOrder: "53",
      totalAmount: "$46,660",
    },
    {
      id: "#876412",
      name: "Argan Oil",
      image: "/Images/oil.png",
      price: "$21",
      totalOrder: "78",
      totalAmount: "$3,46,676",
    },
    {
      id: "#876621",
      name: "EAU DE Parfum",
      image: "/Images/parfum.png",
      price: "$32",
      totalOrder: "98",
      totalAmount: "$3,46,981",
    },
  ];
  return (
    <div className="w-[702px] h-[335px] bg-white rounded-[10px] my-7.5 mx-7.5">
      <div className="flex justify-between items-start mt-6 mx-6">
        <h2 className="text-lg font-bold leading-[100%] text-[#030229]">
          Recent Orders{" "}
        </h2>
        <span className="cursor-pointer">
          <ThreeDot />
        </span>
      </div>
      <table className="w-full  border-collapse  mt-6">
        <thead>
          <tr className="text-[#030229] text-sm text-left font-normal border-b border-gray-100 ">
            <th className="pb-3 pl-6 font-medium ">
              <div className="flex items-center gap-2.5">
                Tracking no <Arrow />
              </div>
            </th>
            <th className="pb-3 font-medium">
              <div className="flex items-center gap-2.5">
                Product Name <Arrow />
              </div>
            </th>
            <th className="pb-3 font-medium">
              <div className="flex items-center gap-2.5">
                Price
                <Arrow />
              </div>
            </th>
            <th className="pb-3 font-medium">
              <div className="flex items-center gap-2.5">
                Total Order
                <Arrow />
              </div>
            </th>
            <th className="pb-3 font-medium">Total Amount </th>
          </tr>
        </thead>
        <tbody className="text-[#030229] font-medium ">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="group hover:bg-gray-50 transition-colors "
            >
              <td className="py-2 text-sm pl-6 text-[#030229] font-normal">
                {order.id}
              </td>
              <td className="py-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center `}
                  >
                    <Image
                      src={order.image}
                      alt={order.name}
                      width={30}
                      height={30}
                      className="w-7.5 h-7.5 object-contain"
                    />
                  </div>
                  <span className="text-sm font-normal text-[#030229]">
                    {order.name}
                  </span>
                </div>
              </td>
              <td className="py-4 text-sm text-[#030229] font-normal">
                {order.price}
              </td>
              <td className="py-4">
                <span className=" w-[61px]  h-[30px] rounded-[8px] font-bold bg-[#26C0E2]/20 text-[#26C0E2] text-sm flex items-center justify-center ">
                  {order.totalOrder}
                </span>
              </td>
              <td className="py-4 text-sm text-[#030229] font-normal ">
                {order.totalAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
