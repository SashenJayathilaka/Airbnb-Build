"use client";

import Image from "next/image";
import React from "react";

type Props = {
  src: string | null | undefined;
  userName?: string | null | undefined;
};

function Avatar({ src, userName }: Props) {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt="hasImag"
          src={src}
        />
      ) : userName ? (
        <img
          className="rounded-full h-[30px] w-[30px]"
          alt="nameImage"
          src={`https://ui-avatars.com/api/?name=${userName}`}
        />
      ) : (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt="noUser"
          src="/assets/avatar.png"
        />
      )}
    </div>
  );
}

export default Avatar;
