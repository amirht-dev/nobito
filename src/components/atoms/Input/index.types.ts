import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import type { VariantProps } from "tailwind-variants";
import type { Merge } from "type-fest";
import type { inputVariants } from ".";

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
