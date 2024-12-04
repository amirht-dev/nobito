import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";

export type LogoProps = ComponentPropsWithoutRefWithProps<
  "svg",
  {
    variant?: "simple" | "with-title" | "with-title-desc";
  }
>;
