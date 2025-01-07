"use client";

import type { RefHTMLElement } from "@/types/utils";
import { cn } from "@/utils/helpers";
import { Slot, Slottable } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";
import { ChevronLeft_Outline } from "../icons/Arrow/ChevronLeft";
import {
  DEFAULT_BREADCRUMB_ELEMENT,
  DEFAULT_BREADCRUMB_ITEM_ELEMENT,
} from "./index.constants";
import type { BreadcrumbItemProps, BreadcrumbProps } from "./index.types";

const Breadcrumb = forwardRef<
  RefHTMLElement<typeof DEFAULT_BREADCRUMB_ELEMENT>,
  BreadcrumbProps
>(
  (
    {
      asChild,
      separator = (
        <ChevronLeft_Outline className="size-[18px] shrink-0 lg:size-6" />
      ),
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : DEFAULT_BREADCRUMB_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          "flex items-center gap-2 overflow-auto lg:gap-4",
          props.className,
        )}
      >
        {React.Children.map(children, (child, idx) => (
          <>
            <Slottable>{child}</Slottable>
            {idx !== React.Children.count(children) - 1 && separator}
          </>
        ))}
      </Comp>
    );
  },
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbItem = forwardRef<
  RefHTMLElement<typeof DEFAULT_BREADCRUMB_ITEM_ELEMENT>,
  BreadcrumbItemProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_BREADCRUMB_ITEM_ELEMENT;
  return (
    <Comp
      {...props}
      ref={ref}
      className={cn("shrink-0 text-label-2 font-normal lg:text-body-1")}
    />
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";

export { Breadcrumb, BreadcrumbItem };
