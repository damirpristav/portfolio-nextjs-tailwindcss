"use client";
import { ReactNode } from "react";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <main
      className={clsx("flex min-h-screen flex-col relative", {
        "bg-white": isLightTheme,
        "bg-dark-300": !isLightTheme,
      })}
    >
      {children}
    </main>
  );
};
