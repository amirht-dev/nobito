import type { Meta, StoryObj } from "@/types/storybook";
import Link from "next/link";
import {
  Section,
  SectionAction,
  SectionContent,
  SectionHeader,
  SectionHeaderLine,
  SectionTitle,
  SectionTitleBold,
} from ".";
import { ArrowCircleLeft_Outline } from "../../atoms/icons/Arrow/ArrowCircleLeft";

const meta = {
  subcomponents: {
    Section,
    SectionContent,
    SectionHeader,
    SectionTitle,
    SectionTitleBold,
    SectionAction,
    SectionHeaderLine,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTitle = {
  render() {
    return (
      <Section>
        <SectionHeader>
          <SectionTitle>
            محبوبترین <SectionTitleBold>پزشکان</SectionTitleBold> این ماه
          </SectionTitle>
        </SectionHeader>

        <SectionContent className="container">
          <div className="h-[200px] bg-primary-50"></div>
        </SectionContent>
      </Section>
    );
  },
} satisfies Story;

export const WithActionAndTitle = {
  render() {
    return (
      <Section>
        <SectionHeader>
          <SectionTitle>
            محبوبترین <SectionTitleBold>پزشکان</SectionTitleBold> این ماه
          </SectionTitle>

          <SectionHeaderLine className="max-lg:hidden" />

          <SectionAction size="sm" className="text-[12px] lg:hidden" asChild>
            <Link href="#">مشاهده همه</Link>
          </SectionAction>
          <SectionAction
            rightIcon={
              <ArrowCircleLeft_Outline className="size-6 max-lg:hidden" />
            }
            size="md"
            className="max-lg:hidden"
            asChild
          >
            <Link href="#">مشاهده همه</Link>
          </SectionAction>
        </SectionHeader>

        <SectionContent className="container">
          <div className="h-[200px] bg-primary-50"></div>
        </SectionContent>
      </Section>
    );
  },
} satisfies Story;
