"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex relative  ">
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      {/* Mobile Menu Button with Logo */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`fixed top-4 left-4 z-50 md:hidden bg-white p-4  w-[360px] justify-between   rounded-lg shadow-md border border-gray-200 transition-opacity flex items-center gap-2 ${
          isMobileOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
         style={{ fontFamily: "Nunito" }}
      >
        <div className="flex gap-2 items-center">

        <Image
          src="/Images/Logo.png"
          alt="Logo"
          width={28}
          height={28}
          className="w-7 h-7"
          />

        <h1 className="font-semibold text-lg leading-[100%] text-[#030229]">
          Base
        </h1>
          </div>
        <svg className="w-5 h-5 text-gray-700 ml-1 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <main className="flex-1 bg-[#FAFAFB] min-h-screen w-full md:w-auto">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;

