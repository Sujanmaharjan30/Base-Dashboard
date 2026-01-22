"use client";
import Image from "next/image";
import {
  Analytics,
  Calender,
  Dashboard,
  Invoice,
  Logout,
  Messages,
  Notification,
  Schedule,
  Settings,
} from "../../../../public/icons/Svg";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Menu = [
  { id: 1, name: "Dashboard", icons: <Dashboard />, path: "/Dashboard" },
  { id: 2, name: "Analytics", icons: <Analytics />, path: "/Analytics" },
  { id: 3, name: "Invoice", icons: <Invoice />, path: "/Invoice" },
  { id: 4, name: "Schedule", icons: <Schedule />, path: "/Schedule" },
  { id: 5, name: "Calender", icons: <Calender />, path: "/Calender" },
  { id: 6, name: "Messages", icons: <Messages />, path: "/Messages" },
  { id: 7, name: "Notification", icons: <Notification />, path: "/Notification" },
  { id: 8, name: "Settings", icons: <Settings />, path: "/Settings" },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

const Sidebar = ({ isMobileOpen, setIsMobileOpen }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuClick = (item: typeof Menu[0]) => {
    router.push(item.path);
    if (isMobile && setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  const shouldShowExpanded = isMobile ? isMobileOpen : isHovered;

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
        />
      )}

      <div
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        className={`transition-all duration-300 ease-in-out bg-white cursor-pointer fixed md:relative z-50 md:z-auto
          ${shouldShowExpanded
            ? "w-full max-w-[218px] translate-x-0"
            : isMobile
              ? "w-20 -translate-x-full md:translate-x-0"
              : "w-20"
          }
          ${isMobile
            ? "h-screen left-0 top-0 rounded-none md:rounded-[10px] md:ml-7.5 md:my-7.5 md:h-[987px] border-r md:border border-gray-100 shadow-lg md:shadow-xs"
            : "ml-7.5 rounded-[10px] shadow-xs h-auto md:h-[987px] my-7.5 border border-gray-100"
          }`}
        style={{ fontFamily: "Nunito" }}>
        {/* Mobile Close Button */}
        {isMobile && isMobileOpen && (
          <button
            onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
            className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* logo */}
        <div className={`flex items-center justify-between ${shouldShowExpanded ? "w-28 mt-12.5 ml-13 flex-row" : "flex flex-col mt-8.5 ml-0 gap-1.5"}`}>
          <Image
            src="/Images/Logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="w-10.5 h-10.5"
          />
          {shouldShowExpanded && (
            <h1
              className="font-semibold text-2xl leading-[100%]"
              style={{ fontFamily: "Nunito" }}
            >
              Base
            </h1>
          )}
        </div>

        {/* button */}
        <div className="mt-13  ">
          {Menu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={` w-36.5 h-5.5 flex gap-4 mt-8 cursor-pointer ${isActive ? "text-[#605BFF]  " : "text-[#030229] ml-7.5"
                  }`}
              >
                {/* active bg */}
                <div
                  className={`flex justify-start items-center 
                            ${isActive
                      ? "w-13 h-12 rounded-tr-[5px] rounded-br-[5px] bg-linear-to-r from-[#ACA9FF]/30 to-transparent "
                      : "w-13 h-12"
                    }`}
                >
                  {/* icons */}
                  <div
                    className={` flex items-center shrink-0 z-10  ${isActive
                      ? "w-5 h-5 text-[#605BFF] ml-7.5"
                      : "text-[#030229]"
                      } ${!shouldShowExpanded && "ml-0 w-5 justify-center"}`}
                  >
                    <span>{item.icons}</span>
                  </div>
                  {shouldShowExpanded && (
                    <span className="leading-[100%] text-base ml-4 font-semibold">
                      {item.name}
                    </span>
                  )}

                </div>
              </button>
            );
          })}
        </div>


        <div className="mx-6 mt-51">
          {shouldShowExpanded && (
            <Image
              src="/Images/Upgrade.png"
              alt="image"
              width={168}
              height={195}
              className="w-42 h-49 object-cover"
            />
          )}
        </div>

        {/* Account */}
        <div className={`w-42 h-11 flex items-center justify-start ${shouldShowExpanded ? "mx-6.5 mt-7.5" : "mx-4.5 mt-[312px]"}`}>

          <div className={`flex items-center ${shouldShowExpanded ? "flex-row gap-2.5" : "flex-col gap-5"}`}>
            <Image
              src="/Images/user.png"
              alt="image"
              width={45}
              height={43}
              className="w-11 h-11"
            />
            {shouldShowExpanded && (
              <div className="flex items-start justify-center flex-col gap-1 w-17">
                <h1 className="font-semibold text-xs leading-[100%] text-black">Easin Arafat</h1>
                <span className="font-normal text-[10px] text-black leading-[100%]">Free Account</span>
              </div>
            )}

            <span className="cursor-pointer">
              <Logout />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
