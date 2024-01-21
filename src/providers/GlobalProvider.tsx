"use client";
import { createContext, useState, useMemo, ReactNode } from "react";

import { Theme } from "@/types";

interface GlobalContextProps {
  isLightTheme: boolean;
  onThemeToggle: () => void;
}

export const GlobalContext = createContext<GlobalContextProps>(undefined!);

export const GlobalProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");
  const isLightTheme = useMemo(() => theme === "light", [theme]);

  const onThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <GlobalContext.Provider value={{ isLightTheme, onThemeToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};

interface Props {
  children: ReactNode;
}
