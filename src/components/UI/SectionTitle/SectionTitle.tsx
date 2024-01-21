"use client";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";

export const SectionTitle = ({ title }: Props) => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <div
      className={clsx("mb-9", {
        "bg-primary-400": isLightTheme,
        "bg-dark-400": !isLightTheme,
      })}
    >
      <div className="w-full max-w-[1000px] mx-auto py-3 px-4">
        <h2
          className={clsx("font-redressed text-3xl text-center", {
            "text-primary": isLightTheme,
            "text-primary-300": !isLightTheme,
          })}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

type Props = {
  title: string;
};
