"use client";

import useCombineRefs from "@/hooks/useCombineRefs";
import useEmblaEvent from "@/hooks/useEmblaEvent";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import {
  forwardRef,
  useCallback,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementRef,
} from "react";
import IconButton from "../buttons/IconButton";
import { ArrowCircleLeft_Outline } from "../icons/Arrow/ArrowCircleLeft";
import { ArrowCircleRight_Outline } from "../icons/Arrow/ArrowCircleRight";
import {
  DEFAULT_EMBLA_CONTAINER_ELEMENT,
  DEFAULT_EMBLA_SLIDE_ELEMENT,
  DEFAULT_EMBLA_WRAPPER_ELEMENT,
  EmblaContext,
  useEmblaContext,
} from "./index.constants";
import type {
  EmblaContainerProps,
  EmblaNavigationProps,
  EmblaProps,
  EmblaWrapperProps,
} from "./index.types";

const Embla = ({ children, type = "flex", plugins, ...props }: EmblaProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(props, plugins);

  return (
    <EmblaContext.Provider
      value={{
        emblaRef,
        type,
        emblaApi,
        ...props,
      }}
    >
      {children}
    </EmblaContext.Provider>
  );
};

const EmblaWrapper = forwardRef<HTMLDivElement, EmblaWrapperProps>(
  ({ asChild, ...props }, ref) => {
    const { emblaRef } = useEmblaContext();
    const combinedRef = useCombineRefs(ref, emblaRef);

    const Comp = asChild ? Slot : DEFAULT_EMBLA_WRAPPER_ELEMENT;

    return (
      <Comp
        {...props}
        ref={combinedRef}
        className={cn("group overflow-hidden", props.className)}
      />
    );
  },
);

EmblaWrapper.displayName = "EmblaWrapper";

const EmblaContainer = forwardRef<HTMLDivElement, EmblaContainerProps>(
  ({ asChild, ...props }, ref) => {
    const { type, axis } = useEmblaContext();
    const Comp = asChild ? Slot : DEFAULT_EMBLA_CONTAINER_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          props.className,
          type,
          type === "flex" ? (axis === "y" ? "flex-col" : "flex-row") : "",
        )}
      />
    );
  },
);

EmblaContainer.displayName = "EmblaContainer";

// calc(_calc(100%_/_3)_-_calc(_calc(_calc(3_-_1)_*_16px_)_/_3_))

const EmblaSlide = forwardRef<HTMLDivElement, EmblaContainerProps>(
  ({ asChild, ...props }, ref) => {
    const { type, loop } = useEmblaContext();
    const Comp = asChild ? Slot : DEFAULT_EMBLA_SLIDE_ELEMENT;
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          "me-[var(--gap,0px)] min-w-0",
          !loop && "last:me-0",
          type === "flex"
            ? "flex-[0_0_var(--slide-size,calc(calc(100%/var(--slide-per-view,1))-calc(calc(calc(var(--slide-per-view,1)-1)*var(--gap,0px))/var(--slide-per-view,1))))]"
            : "",
          props.className,
        )}
      />
    );
  },
);

EmblaSlide.displayName = "EmblaSlide";

const EmblaPreButton = forwardRef<
  ElementRef<typeof IconButton>,
  ComponentPropsWithoutRef<typeof IconButton>
>(({ children, ...props }, ref) => {
  const { emblaApi } = useEmblaContext();
  const [disabled, setDisabled] = useState(false);

  useEmblaEvent(
    emblaApi,
    useMemo(() => ["init", "select"], []),
    useCallback((api) => setDisabled(!api.canScrollPrev()), []),
  );

  return (
    <IconButton
      {...props}
      ref={ref}
      disabled={disabled}
      onClick={() => emblaApi?.scrollPrev()}
      className={cn(
        "rounded-full border border-black-400 disabled:cursor-not-allowed disabled:opacity-30",
        props.className,
      )}
    >
      {children ?? <ArrowCircleRight_Outline />}
    </IconButton>
  );
});

EmblaPreButton.displayName = "EmblaPreButton";

const EmblaNextButton = forwardRef<
  ElementRef<typeof IconButton>,
  ComponentPropsWithoutRef<typeof IconButton>
>(({ children, ...props }, ref) => {
  const { emblaApi } = useEmblaContext();
  const [disabled, setDisabled] = useState(false);

  useEmblaEvent(
    emblaApi,
    useMemo(() => ["init", "select"], []),
    useCallback((api) => setDisabled(!api.canScrollNext()), []),
  );

  return (
    <IconButton
      {...props}
      ref={ref}
      disabled={disabled}
      onClick={() => emblaApi?.scrollNext()}
      className={cn(
        "rounded-full border border-black-400 disabled:cursor-not-allowed disabled:opacity-30",
        props.className,
      )}
    >
      {children ?? <ArrowCircleLeft_Outline />}
    </IconButton>
  );
});

EmblaNextButton.displayName = "EmblaNextButton";

const EmblaNavigation = forwardRef<HTMLDivElement, EmblaNavigationProps>(
  (props, ref) => {
    const { emblaApi } = useEmblaContext();
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);

    useEmblaEvent(
      emblaApi,
      "init",
      useCallback((api) => {
        setCount(api.scrollSnapList().length);
        setSelected(api.selectedScrollSnap());
        console.log(api.scrollSnapList());
      }, []),
    );

    useEmblaEvent(
      emblaApi,
      "select",
      useCallback((api) => setSelected(api.selectedScrollSnap()), []),
    );

    if (props.children) return !!emblaApi && props.children(emblaApi);

    const {
      type = "dot",
      renderItems,
      navigateOnClick = true,
      ...containerProps
    } = props;

    return (
      <div
        {...containerProps}
        className={cn(
          "flex items-center",
          type === "dot" && "gap-[6px]",
          type === "dash" && "h-0.5",
          "relative",
          containerProps.className,
        )}
        ref={ref}
      >
        {Array.from({ length: count }, (_, idx) => {
          const isSelected = selected === idx;
          return (
            renderItems?.({ isSelected }, idx, emblaApi) ?? (
              <>
                <span
                  key={idx}
                  // style={{ "--size": size } as CSSProperties}
                  className={clsx(
                    type === "dot" &&
                      clsx(
                        "rounded-full transition-[width]",
                        isSelected
                          ? "h-2 w-12 bg-primary-500"
                          : "size-3 border border-black-400",
                      ),
                    type === "dash" && "h-full flex-1 bg-grey-200",
                    navigateOnClick && "cursor-pointer",
                  )}
                  {...(navigateOnClick && {
                    onClick: () => emblaApi?.scrollTo(idx),
                  })}
                />
                {type === "dash" && (
                  <span
                    className="absolute left-[--x] top-0 h-full w-[--size] bg-grey-700 transition-all"
                    style={
                      {
                        "--size": `${100 / count}%`,
                        "--x": `${(selected ?? 0) * (100 / count)}%`,
                      } as CSSProperties
                    }
                  />
                )}
              </>
            )
          );
        })}
      </div>
    );
  },
);

EmblaNavigation.displayName = "EmblaNavigation";

export {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
};
