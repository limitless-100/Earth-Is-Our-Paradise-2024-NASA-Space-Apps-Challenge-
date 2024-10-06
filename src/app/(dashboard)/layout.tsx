"use client"
import React from "react";
import Sidebar from "@/components/sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:flex lg:min-h-[600px] p-2 lg:grid-cols-3 xl:min-h-screen bg-[#e4e0e0]">
      <div className="hidden lg:w-1/5 lg:flex items-center justify-center">
          <Sidebar />
      </div>
      <div className="flex-grow flex items-center justify-center py-12">{children}</div>
       <div className="hidden lg:w-1/5 lg:flex items-center justify-center">
          <Sidebar />
      </div>
    </div>
  );
}

export default layout;
