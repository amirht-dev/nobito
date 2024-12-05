import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { PropsWithChildren } from "react";

export type RadioGroupContextType = {
  value?: string | null;
  onChange?: (value: string | null) => void;
  name: string;
};

export type RadioButtonProps = SlottableProps<
  Omit<
    ComponentPropsWithoutRefWithProps<
      "input",
      {
        onSelect?: (value: string) => void;
        value: string;
      }
    >,
    "type"
  >
>;

export type RadioGroupProps = PropsWithChildren<{
  value?: string | null;
  onChange?: (value: string | null) => void;
  name: string;
}>;
