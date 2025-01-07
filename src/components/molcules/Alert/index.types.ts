import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { ReactNode } from "react";

export type AlertProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    icon?: ReactNode;
    description: ReactNode;
  }
>;
