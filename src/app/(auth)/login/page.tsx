"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { createSession } from "@/actions/auth-actions";
import { useUserSession } from "@/hooks/use-user-session";
function Page() {
  const router = useRouter();
  const userSessionId = useUserSession(null);
  // page router on login
  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };

  useEffect(() => {
    if (userSessionId) {
      router.push("/dashboard");
    }
  }, [userSessionId]);
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
          <h1 className="text-3xl font-bold">Welcome </h1>
          <p>Please enter your details</p>
        </div>
      </div>
      <div className="grid gap-4">
        <Button className="w-full" onClick={handleSignIn}>
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
