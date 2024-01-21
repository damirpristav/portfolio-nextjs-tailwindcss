"use client";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";
import { Button } from "@/components/UI";

export const Header = () => {
  const { isLightTheme, onThemeToggle } = useGlobalProvider();

  return (
    <header
      className={clsx("mb-6 pt-9 xs:pt-0", {
        "bg-primary-400": isLightTheme,
        "bg-dark": !isLightTheme,
      })}
    >
      <Button
        label={isLightTheme ? "Dark" : "Light"}
        onClick={onThemeToggle}
        className="z-10 absolute top-0 xs:top-3 w-full xs:w-auto xs:right-3 rounded-none xs:rounded-full"
      />
      <div className="w-full max-w-[1000px] mx-auto py-3 px-4">
        <h1
          className={clsx("font-redressed text-4xl text-center", {
            "text-primary": isLightTheme,
            "text-primary-300": !isLightTheme,
          })}
        >
          Portfolio
        </h1>
      </div>
    </header>
  );
};
