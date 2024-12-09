import type { ComponentPropsWithoutRef } from "react";
import type { DEFAULT_HASHTAG_ELEMENT } from "./index.constants";
import type { SlottableProps } from "@/types/slottable";

export type HashTagProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_HASHTAG_ELEMENT>
>;
