import clsx from "clsx";
import { ReactNode } from "react";

import { useGlobalProvider } from "@/hooks";

export const ContentSection = ({
  borderPlacement,
  number,
  title,
  children,
}: Props) => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <div className="md:pl-10 flex w-full">
      <div
        className={clsx("py-5 flex-1 border-primary", {
          "border-r pr-10": borderPlacement === "right",
          "border-l pl-10": borderPlacement === "left",
        })}
      >
        <div className="flex items-center gap-4 font-redressed mb-4">
          <div
            className={clsx(
              "h-10 w-10 xs:w-16 xs:h-16 text-xl xs:text-3xl rounded-full flex items-center justify-center shrink-0",
              {
                "bg-primary-300 text-primary-400": isLightTheme,
                "bg-dark text-primary": !isLightTheme,
              }
            )}
          >
            {number}
          </div>
          <h2
            className={clsx("text-3xl xs:text-4xl", {
              "text-primary": isLightTheme,
              "text-primary-300": !isLightTheme,
            })}
          >
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

interface Props {
  borderPlacement: "left" | "right";
  number: number;
  title: string;
  children: ReactNode;
}
