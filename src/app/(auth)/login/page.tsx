"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  // page router on login
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  }
  return (
    <div className="mx-auto grid w-[350px] h-[80vh] px-10 rounded-xl py-4 gap-6 bg-white">
      <div className="grid gap-2 text-center">
        <Image
          src="/earth.svg"
          alt="Image"
          className="mx-auto"
          width={100}
          height={100}
        />
        <div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p>Please enter your details</p>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" onClick={handleLogin} className="w-full" >
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Page;
