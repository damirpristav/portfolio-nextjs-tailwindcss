"use client";
import clsx from "clsx";

import { useGlobalProvider } from "@/hooks";
import { ContentSection } from "@/components/UI";

export const About = () => {
  const { isLightTheme } = useGlobalProvider();

  return (
    <div
      className={clsx("p-6", {
        "bg-primary-400": isLightTheme,
        "bg-dark-400": !isLightTheme,
      })}
    >
      <div className="grid md:grid-cols-2 gap-12 xs:px-4 relative before:hidden md:before:block before:absolute before:left-1/2 before:w-px before:h-full before:bg-primary">
        <ContentSection borderPlacement="left" title="About me" number={1}>
          <p className={clsx("text-sm", { "text-primary-400": !isLightTheme })}>
            Passionate web developer with a creative edge, dedicated to crafting
            engaging and user-friendly digital experiences. Adept at translating
            design concepts into responsive, feature-rich websites using a
            variety of technologies. Constantly exploring new tools and staying
            abreast of industry trends to deliver cutting-edge solutions.
          </p>
        </ContentSection>
        <ContentSection
          borderPlacement="right"
          title="My experience"
          number={2}
        >
          <p className={clsx("text-sm", { "text-primary-400": !isLightTheme })}>
            Over 5 years of hands-on experience in full-stack development.
            Proven expertise in HTML, CSS, JavaScript, and popular frameworks
            like React. Successful track record of collaborating with
            cross-functional teams, meeting project deadlines, and exceeding
            client expectations with scalable, high-performance web
            applications.
          </p>
        </ContentSection>
      </div>
    </div>
  );
};
