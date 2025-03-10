import type { Merge, MergeExclusive } from "@/lib/type-fest";
import type { PropsWithAsChild } from "@/types/slottable";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
import type { EmblaViewportRefType } from "embla-carousel-react";
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import type {
  DEFAULT_EMBLA_BUTTON_ELEMENT,
  DEFAULT_EMBLA_CONTAINER_ELEMENT,
  DEFAULT_EMBLA_NAVIGATION_ELEMENT,
  DEFAULT_EMBLA_SLIDE_ELEMENT,
  DEFAULT_EMBLA_WRAPPER_ELEMENT,
} from "./index.constants";

type EmblaDisplayType = "flex" | "grid";

export type EmblaContextType = {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
  type: EmblaDisplayType;
} & EmblaOptionsType;

export type NavigationState = {
  isSelected: boolean;
};

export type EmblaProps = PropsWithChildren<
  Merge<
    EmblaOptionsType,
    { type?: EmblaDisplayType; plugins?: EmblaPluginType[] }
  >
>;

export type EmblaWrapperProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_WRAPPER_ELEMENT>
  >
>;

export type EmblaContainerProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_CONTAINER_ELEMENT>
  >
>;

export type EmblaSlideProps = PropsWithChildren<
  PropsWithAsChild<ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_SLIDE_ELEMENT>>
>;

export type EmblaButtonProps = PropsWithChildren<
  PropsWithAsChild<
    ComponentPropsWithoutRef<typeof DEFAULT_EMBLA_BUTTON_ELEMENT>
  >
>;

export type EmblaNavigationProps = MergeExclusive<
  {
    children: (api: EmblaCarouselType) => ReactNode;
  },
  ComponentPropsWithoutRefWithProps<
    typeof DEFAULT_EMBLA_NAVIGATION_ELEMENT,
    {
      children?: undefined;
      type?: "dot" | "dash";
      renderItems?: (
        state: NavigationState,
        index: number,
        api: EmblaCarouselType | undefined,
      ) => ReactNode;
      navigateOnClick?: boolean;
    }
  >
>;
