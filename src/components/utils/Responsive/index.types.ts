import { screens } from "@/config.json";
import type { ComponentPropsWithoutRef } from "react";

type Breakpoints = keyof typeof screens;

export type ResponsiveProps<T extends React.ComponentType> = {
  component: T;
} & ComponentPropsWithoutRef<T> &
  Partial<Record<Breakpoints, ComponentPropsWithoutRef<T>>>;
