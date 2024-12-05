import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRef } from "react";
import type { DEFAULT_ICON_BUTTON_ELEMENT } from "./index.constants";

export type IconButtonProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_ICON_BUTTON_ELEMENT>
>;
