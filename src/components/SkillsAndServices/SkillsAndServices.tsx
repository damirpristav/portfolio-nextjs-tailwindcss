"use client";
import clsx from "clsx";

import { skills, services } from "@/data";
import { useGlobalProvider } from "@/hooks";
import { ContentSection } from "@/components/UI";

export const SkillsAndServices = () => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <div
      className={clsx("p-6", {
        "bg-primary-400": isLightTheme,
        "bg-dark-400": !isLightTheme,
      })}
    >
      <div className="grid md:grid-cols-2 gap-12 xs:px-4 relative before:hidden md:before:block before:absolute before:left-1/2 before:w-px before:h-full before:bg-primary">
        <ContentSection borderPlacement="left" title="My Skills" number={3}>
          <ul className="flex flex-col gap-4 md:gap-2">
            {skills.map(({ name, rating }) => (
              <li
                key={name}
                className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0.5"
              >
                <p
                  className={clsx("uppercase md:w-[40%] truncate", {
                    "text-primary": !isLightTheme,
                  })}
                >
                  {name}
                </p>
                <div className="md:w-[60%] flex items-center gap-1.5">
                  {Array(rating)
                    .fill("")
                    .map((_, index) => (
                      <div
                        key={index}
                        className={clsx(
                          "w-2.5 h-2.5 rounded-full block shrink-0",
                          {
                            "bg-primary-300": isLightTheme,
                            "bg-primary-400": !isLightTheme,
                          }
                        )}
                      />
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </ContentSection>
        <ContentSection borderPlacement="right" title="Services" number={4}>
          <ul className={clsx('flex flex-col gap-2', { 'text-primary-400': !isLightTheme })}>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </ContentSection>
      </div>
    </div>
  );
};
