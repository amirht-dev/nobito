import type { RefHTMLElement } from "@/types/utils";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import Button from "../../atoms/buttons/Button";
import {
  DEFAULT_SECTION_CONTENT_ELEMENT,
  DEFAULT_SECTION_ELEMENT,
  DEFAULT_SECTION_HEADER_ELEMENT,
  DEFAULT_SECTION_TITLE_BOLD_ELEMENT,
} from "./index.constants";
import type { SectionHeaderProps, SectionProps } from "./index.types";

const Section = forwardRef<
  RefHTMLElement<typeof DEFAULT_SECTION_ELEMENT>,
  SectionProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_SECTION_ELEMENT;
  return (
    <Comp
      {...props}
      className={cn("space-y-10 lg:space-y-14", props.className)}
      ref={ref}
    />
  );
});
Section.displayName = "Section";

const SectionHeader = forwardRef<
  RefHTMLElement<typeof DEFAULT_SECTION_HEADER_ELEMENT>,
  SectionHeaderProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_SECTION_HEADER_ELEMENT;
  return (
    <Comp
      {...props}
      className={cn("container flex items-center gap-3", props.className)}
      ref={ref}
    />
  );
});
SectionHeader.displayName = "SectionHeader";

const SectionHeaderLine = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn("h-px w-full flex-1 bg-grey-200", props.className)}
    />
  );
};

const SectionTitle = forwardRef<
  RefHTMLElement<typeof DEFAULT_SECTION_HEADER_ELEMENT>,
  SectionHeaderProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_SECTION_HEADER_ELEMENT;
  return (
    <Comp
      {...props}
      className={cn(
        "text-[20px] font-bold text-white-800 lg:text-headline-1 lg:text-grey-500",
      )}
      ref={ref}
    />
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionTitleBold = forwardRef<
  RefHTMLElement<typeof DEFAULT_SECTION_TITLE_BOLD_ELEMENT>,
  SectionHeaderProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_SECTION_TITLE_BOLD_ELEMENT;
  return <Comp {...props} className={cn("text-primary-500")} ref={ref} />;
});
SectionTitleBold.displayName = "SectionTitleBold";

const SectionAction = forwardRef<
  ElementRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  return (
    <Button
      variant="text"
      {...props}
      className={cn("ms-auto", props.className)}
      ref={ref}
    />
  );
});
SectionAction.displayName = "SectionAction";

const SectionContent = forwardRef<
  RefHTMLElement<typeof DEFAULT_SECTION_CONTENT_ELEMENT>,
  SectionHeaderProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_SECTION_CONTENT_ELEMENT;
  return <Comp {...props} ref={ref} />;
});
SectionContent.displayName = "SectionContent";

export {
  Section,
  SectionAction,
  SectionContent,
  SectionHeader,
  SectionHeaderLine,
  SectionTitle,
  SectionTitleBold,
};
