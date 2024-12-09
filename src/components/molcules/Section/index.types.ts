import type { SlottableProps } from "@/types/slottable";
import type { ComponentPropsWithoutRef } from "react";
import type {
  DEFAULT_SECTION_ELEMENT,
  DEFAULT_SECTION_HEADER_ELEMENT,
  DEFAULT_SECTION_CONTENT_ELEMENT,
  DEFAULT_SECTION_TITLE_ELEMENT,
  DEFAULT_SECTION_TITLE_BOLD_ELEMENT,
} from "./index.constants";

export type SectionProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_SECTION_ELEMENT>
>;

export type SectionHeaderProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_SECTION_HEADER_ELEMENT>
>;

export type SectionTitleProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_SECTION_TITLE_ELEMENT>
>;

export type SectionContentProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_SECTION_CONTENT_ELEMENT>
>;

export type SectionTitleBoldProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_SECTION_TITLE_BOLD_ELEMENT>
>;
