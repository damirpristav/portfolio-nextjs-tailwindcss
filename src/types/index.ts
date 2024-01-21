import { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface Social {
  icon: ReactNode;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
}
