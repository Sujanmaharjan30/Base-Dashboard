import React from "react";
import { ThreeDot } from "../../../../public/icons/Svg";
import Image from "next/image";

const Selling = () => {
  const products = [
    {
      id: 1,
      name: "NIKE Shoes Black Pattern",
      price: "$87",
      rating: 4,
      image: "/Images/nike.png",
    },
    {
      id: 2,
      name: "iPhone 12",
      price: "$987",
      rating: 4,
      image: "/Images/nike.png",

    },
  ];
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? "text-[#FFD66B]" : "text-gray-200"}`}
      >
        ★
      </span>
    ));
  };
  return (
    <div
      className="w-[430px] h-[335px] bg-white mt-8 rounded-[10px] "
      style={{ fontFamily: "Nunito" }}
    >
      <div className="flex justify-between items-start mt-6 mx-6">
        <h2 className="text-lg font-bold leading-[100%] text-[#030229]">
          Recent Orders{" "}
        </h2>
        <span className="cursor-pointer">
          <ThreeDot />
        </span>
      </div>
      <div className="flex flex-col px-[15px] divide-y divide-gray-200 ">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4  pb-8 first:pt-0 last:pb-0">
            {/* Product Image Container */}
            <div
              className={`w-[96px] h-[96px] rounded-[15px] flex items-center justify-center `}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={70}
                height={70}
                className="object-contain mt-[25px]"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col  mt-[32px]">
              <h3 className="text-[15px] font-normal text-black">
                {product.name}
              </h3>
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-[15px] font-bold text-black">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;
