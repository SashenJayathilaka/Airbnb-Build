"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/assets/logo.png"
      />
    </div>
  );
}

export default Logo;
