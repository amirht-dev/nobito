import type { ReactNode } from "react";

export type RatingProps = {
  count?: number;
  value?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  disabled?: boolean;
};
