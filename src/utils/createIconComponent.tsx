import type { DistributiveMerge } from "@/lib/type-fest";
import type { ComponentPropsWithoutRef } from "react";
import type { LiteralUnion, RequireAtLeastOne } from "type-fest";

export type IconVariant =
  | "bold"
  | "broken"
  | "bulk"
  | "linear"
  | "outlined"
  | "twotone";

export type IconOwnProps<TVariant> = {
  size?: LiteralUnion<"24" | "16", string> | number;
  variant?: TVariant;
};

export type IconVariantObject = Record<IconVariant, React.JSX.Element>;

export type IconProps<TVariant> = DistributiveMerge<
  ComponentPropsWithoutRef<"svg">,
  IconOwnProps<TVariant>,
  { simplify: false }
>;

export default function createIconComponent<
  TVariantsPaths extends RequireAtLeastOne<Partial<IconVariantObject>>,
>(variantsPaths: TVariantsPaths) {
  const Comp = ({
    size = "1em",
    variant = "outlined" in variantsPaths
      ? "outlined"
      : (Object.keys(variantsPaths)[0] as IconVariant),
    ...props
  }: IconProps<keyof TVariantsPaths>) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {variantsPaths[variant] as React.ReactNode}
      </svg>
    );
  };
  return Comp;
}
