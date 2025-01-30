"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import clsx from "clsx";
import { forwardRef } from "react";
import { DEFAULT_BUTTON_ELEMENT } from "./index.constants";
import type { ButtonProps } from "./index.types";
import { tv } from "tailwind-variants";
import { twMergeConfig } from "@/lib/tailwind-merge";
import { withResponsive } from "@/components/utils/Responsive";

export const buttonVariants = tv(
  {
    slots: {
      root: "disabled:cursor-not-allowed transition-colors",
      icon: "",
    },
    variants: {
      size: {
        sm: {
          root: "py-1.5 px-4 rounded-md font-medium text-[14px] leading-[20px]",
          icon: "size-5",
        },
        md: {
          root: "py-2 px-4 rounded-[7px] font-medium text-[16px] leading-normal",
          icon: "size-6",
        },
        lg: {
          root: "py-3 px-4 rounded-[7px] font-medium text-[16px] leading-normal",
          icon: "size-6",
        },
        xl: {
          root: "py-3 px-4 rounded-[10px] font-medium text-[20px] leading-[32px]",
          icon: "size-8",
        },
      },
      variant: {
        fill: {
          root: "disabled:bg-grey-200 disabled:text-white-500 disabled:hover:bg-grey-200",
        },
        outline: {
          root: "border disabled:border-grey-200 disabled:text-grey-200 disabled:hover:bg-[unset]",
        },
        text: {
          root: "disabled:text-grey-200 disabled:hover:bg-[unset]",
        },
      },
      color: {
        primary: {},
        secondary: {},
        black: {},
        white: {
          root: "hover:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]",
        },
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        color: "primary",
        className: {
          root: "bg-primary-500 text-white-500 hover:bg-primary-600",
        },
      },
      {
        variant: "outline",
        color: "primary",
        className: {
          root: "bg-transparent hover:bg-primary-50 text-primary-500 hover:text-primary-600 border-primary-500 hover:border-primary-600",
        },
      },
      {
        variant: "text",
        color: "primary",
        className: {
          root: "bg-transparent hover:bg-primary-50 text-primary-500 hover:text-primary-600",
        },
      },
      {
        variant: "fill",
        color: "secondary",
        className: {
          root: "bg-secondary-500 text-black-400 hover:bg-secondary-600",
        },
      },
      {
        variant: "outline",
        color: "secondary",
        className: {
          root: "bg-transparent hover:bg-secondary-50 text-secondary-500 hover:text-secondary-600 border-secondary-500 hover:border-secondary-600",
        },
      },
      {
        variant: "text",
        color: "secondary",
        className: {
          root: "bg-transparent hover:bg-secondary-50 text-secondary-500 hover:text-secondary-600",
        },
      },
      {
        variant: "fill",
        color: "black",
        className: {
          root: "bg-black-500 text-white-500 hover:bg-black-400",
        },
      },
      {
        variant: "outline",
        color: "black",
        className: {
          root: "bg-transparent hover:bg-grey-100 text-black-500 hover:text-black-400 border-black-500 hover:border-black-400",
        },
      },
      {
        variant: "text",
        color: "black",
        className: {
          root: "bg-transparent hover:bg-grey-100 text-black-500 hover:text-black-400",
        },
      },
      {
        variant: "fill",
        color: "white",
        className: {
          root: "bg-white-500 text-black-500",
        },
      },
      {
        variant: "outline",
        color: "white",
        className: {
          root: "bg-transparent hover:bg-white-600/10 text-white-500 hover:text-white-600 border-white-500 hover:border-white-600",
        },
      },
      {
        variant: "text",
        color: "white",
        className: {
          root: "bg-transparent hover:bg-white-600/10 text-white-500 hover:text-white-600",
        },
      },
    ],
    defaultVariants: {
      size: "md",
      color: "primary",
      variant: "fill",
    },
  },
  { responsiveVariants: true, twMergeConfig: twMergeConfig },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      leftIcon,
      rightIcon,
      className,
      size = "md",
      variant = "fill",
      color = "primary",
      ...props
    },
    ref,
  ) => {
    const cns = buttonVariants({
      size,
      variant,
      color,
    });

    const Comp = asChild ? Slot : DEFAULT_BUTTON_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={cns.root({
          className: clsx(
            (!!leftIcon || !!rightIcon) && "inline-flex items-center gap-2",
            className,
          ),
        })}
      >
        <Slot className={cns.icon()}>{leftIcon}</Slot>
        <Slottable>{children}</Slottable>
        <Slot className={cns.icon()}>{rightIcon}</Slot>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;

export const ResponsiveButton = withResponsive(Button);
