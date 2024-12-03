import type { ElementType } from "react";

export const BUTTON_SIZES = ["sm", "md", "lg", "xl"] as const;

export const BUTTON_VARIANTS = ["fill", "outline", "text"] as const;

export const BUTTON_COLORS = [
  "primary",
  "secondary",
  "black",
  "white",
] as const;

export const DEFAULT_BUTTON_ELEMENT = "button" satisfies ElementType;
