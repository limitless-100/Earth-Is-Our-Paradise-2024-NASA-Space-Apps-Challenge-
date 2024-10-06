import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen bg-[#e4e0e0]">
      <div className="hidden bg-muted lg:flex items-center justify-center bg-[#e4e0e0]">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo2.svg"
            alt="Image"
            width={400}
            height={400}
            className=""
          />
          <p>This is our home, we must take care of it.</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">{children}</div>
    </div>
  );
}

export default layout;
