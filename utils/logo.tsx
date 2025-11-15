"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      priority
      className='w-[120px] h-auto sm:w-[160px] sm:h-auto sm:mx-0 cursor-pointer'
      src={
        theme === "dark"
          ? "/logo/navbar/investeren-in-lombok-diap.svg"
          : "/logo/navbar/investeren-in-lombok.svg"
      }
      height={28}
      width={120}
      alt='investeren-in-lombok-logo'
    />
  );
};
