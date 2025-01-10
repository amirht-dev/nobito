import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { VariantProps } from "tailwind-variants";
import type { messageCardVariants } from ".";

export interface MessageCardProps
  extends ComponentPropsWithoutRefWithProps<
    "div",
    VariantProps<typeof messageCardVariants>
  > {}
