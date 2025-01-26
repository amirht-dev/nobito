import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type RatingProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    count?: number;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    disabled?: boolean;
  }
>;
