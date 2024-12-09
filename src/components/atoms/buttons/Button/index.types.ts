import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { ReactNode } from "react";
import type { ArrayValues } from "type-fest";
import type {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  DEFAULT_BUTTON_ELEMENT,
} from "./index.constants";

export type ButtonOwnProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: ArrayValues<typeof BUTTON_SIZES>;
  color?: ArrayValues<typeof BUTTON_COLORS>;
  variant?: ArrayValues<typeof BUTTON_VARIANTS>;
};

export type ButtonProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<
    typeof DEFAULT_BUTTON_ELEMENT,
    ButtonOwnProps
  >
>;
