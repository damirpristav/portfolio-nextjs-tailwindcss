"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";

export const Button = ({ label, className, ...props }: Props) => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <button
      className={clsx(
        "px-6 py-0.5 rounded-full border-4",
        {
          "bg-dark-400/[0.85] text-primary-400 border-dark": isLightTheme,
          "bg-primary text-primary-400 border-primary-300": !isLightTheme,
        },
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
