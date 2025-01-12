import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import type { VariantProps } from "tailwind-variants";
import type { Merge } from "type-fest";
import type { inputVariants } from ".";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";

export type FieldContextType = { id: string; required: InputProps["required"] };

export type FieldProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    id: string;
    required?: InputProps["required"];
  }
>;

export type InputProps = Merge<
  ComponentPropsWithoutRef<"input">,
  Merge<
    Omit<VariantProps<typeof inputVariants>, "icon">,
    {
      containerProps?: ComponentPropsWithRef<"div">;
      prefixIcon?: ReactNode;
      suffixIcon?: ReactNode;
    }
  >
>;
