import config from "@/config.json";
import type React from "react";
import type { RequiredKeysOf } from "type-fest";

export type Breakpoints = keyof typeof config.screens | "DEFAULT";

type PartialKeyof<T extends object> = Exclude<keyof T, RequiredKeysOf<T>>;

export type ResponsivePropObject<TProp> = Partial<Record<Breakpoints, TProp>>;

export type ResponsiveComponentProp<TProp> =
  | TProp
  | ResponsivePropObject<TProp>;

export type ComponentResponsiveProps<T extends object> =
  T extends infer U extends object
    ? {
        [P in RequiredKeysOf<U>]: ResponsiveComponentProp<U[P]>;
      } & {
        [P in PartialKeyof<U>]?: ResponsiveComponentProp<U[P]>;
      }
    : never;

export type ResponsiveProps<T extends object> = {
  component: React.ComponentType<T>;
} & ComponentResponsiveProps<T>;

// export type ResponsiveProps<T extends React.ComponentType> = {
//   component: T;
// } & ComponentPropsWithoutRef<T> &
//   Partial<Record<Breakpoints, ComponentPropsWithoutRef<T>>>;
