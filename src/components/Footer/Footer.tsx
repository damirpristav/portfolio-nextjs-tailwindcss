"use client";
import Link from "next/link";
import clsx from "clsx";

import { social } from "@/data";
import { useGlobalProvider } from "@/hooks";

export const Footer = () => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <footer
      className={clsx("pt-6 border-t-[32px]", {
        "border-primary-400": isLightTheme,
        "border-dark-400": !isLightTheme,
      })}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <div
          className={clsx("px-4 py-3", {
            "bg-primary-400": isLightTheme,
            "bg-dark-400": !isLightTheme,
          })}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 text-center py-10">
              <p className="text-primary font-redressed text-5xl xs:text-7xl uppercase mb-4">
                LET’S TALK
              </p>
              <p
                className={clsx("text-lg xs:text-2xl break-all", {
                  "text-primary-400": !isLightTheme,
                })}
              >
                janedoe@mydomain.com
              </p>
            </div>
            <div className="flex-1 grid md:grid-cols-2">
              <div className="border-t md:border-t-0 md:border-l border-primary px-4 xs:px-10 xs:pr-0 py-10">
                <h4 className="font-redressed text-2xl mb-4 text-primary">
                  Contact Info
                </h4>
                <div className={clsx({ "text-white": !isLightTheme })}>
                  <address>
                    <p>163 Strosin Ville, Carrollhaven, NM 93867</p>
                  </address>
                  <p>+18548574892</p>
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-primary px-4 xs:px-10 xs:pr-0 py-10">
                <h4 className="font-redressed text-2xl mb-4 text-primary">
                  Follow me
                </h4>
                <ul className="flex flex-col gap-2">
                  {social.map((item) => (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        target="_blank"
                        className={clsx("transition-colors", {
                          "hover:text-primary": isLightTheme,
                          "text-white hover:text-primary-300": !isLightTheme,
                        })}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
