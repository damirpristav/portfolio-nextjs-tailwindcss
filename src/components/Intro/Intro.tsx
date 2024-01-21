"use client";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";
import { social } from "@/data";

export const Intro = () => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <div
      className={clsx("grid md:grid-cols-2 gap-12 p-6", {
        "bg-primary-400": isLightTheme,
        "bg-dark-400": !isLightTheme,
      })}
    >
      <div
        className={clsx("realtive p-4", {
          "bg-white": isLightTheme,
          "bg-dark-300": !isLightTheme,
        })}
      >
        <Image
          src="/images/portrait.jpg"
          alt="Jane Doe"
          width={800}
          height={600}
          className="w-full block h-auto"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p
            className={clsx("text-lg mb-4", {
              "text-primary-400": !isLightTheme,
            })}
          >
            Welcome, my name is
          </p>
          <h2
            className={clsx("text-5xl md:text-7xl font-redressed", {
              "text-primary": isLightTheme,
              "text-primary-300": !isLightTheme,
            })}
          >
            Jane Doe
          </h2>
        </div>
        <div className="mt-auto">
          <p
            className={clsx("text-lg mb-4", {
              "text-primary-400": !isLightTheme,
            })}
          >
            Here’s where you can find me:
          </p>
          <div className="flex items-center flex-wrap gap-4 text-xl">
            {social.map(({ icon, url }) => (
              <Link
                key={url}
                href={url}
                target="_blank"
                className={clsx(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                  {
                    "bg-primary text-white hover:bg-primary/[0.8]":
                      isLightTheme,
                    "bg-dark-300 text-primary-300 hover:bg-dark-300/[0.8]":
                      !isLightTheme,
                  }
                )}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
