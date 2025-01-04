import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { ReactNode } from "react";
import type { DEFAULT_CHIP_ELEMENT } from "./index.constants";

export type ChipProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<
    typeof DEFAULT_CHIP_ELEMENT,
    {
      prefixIcon?: ReactNode;
      suffixIcon?: ReactNode;
    }
  >
>;
