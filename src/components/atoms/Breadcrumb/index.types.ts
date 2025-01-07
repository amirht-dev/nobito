import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type {
  DEFAULT_BREADCRUMB_ELEMENT,
  DEFAULT_BREADCRUMB_ITEM_ELEMENT,
} from "./index.constants";

export type BreadcrumbProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<
    typeof DEFAULT_BREADCRUMB_ELEMENT,
    {
      separator?: ReactNode;
    }
  >
>;

export type BreadcrumbItemProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_BREADCRUMB_ITEM_ELEMENT>
>;
