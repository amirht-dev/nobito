import type { ReactNode } from "react";
import type { OverrideProps, Props } from "./utils";
import type { EmptyObject } from "type-fest";

export type PropsWithAsChild<P extends Props> = OverrideProps<
  P,
  {
    asChild?: boolean;
  }
>;

type SlottableWithAsChildProps<P extends Props> = {
  asChild: true;
  children: ReactNode;
} & Omit<P, "asChild" | "children">;

type SlottableWithoutAsChildProps<P extends Props> = {
  asChild?: false;
} & Omit<P, "asChild">;

export type SlottableProps<P extends Props = EmptyObject> =
  | SlottableWithAsChildProps<P>
  | SlottableWithoutAsChildProps<P>;

export type SlottableComponent<P extends Props = EmptyObject> = React.FC<
  SlottableProps<P>
>;
