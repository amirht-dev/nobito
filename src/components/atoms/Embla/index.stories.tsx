import type { Meta, StoryObj } from "@/types/storybook";
import {
  Embla,
  EmblaContainer,
  EmblaNavigation,
  EmblaNextButton,
  EmblaPreButton,
  EmblaSlide,
  EmblaWrapper,
} from ".";
import clsx from "clsx";

const meta = {
  subcomponents: {
    Embla,
    EmblaContainer,
    EmblaSlide,
    EmblaWrapper,
    EmblaPreButton,
    EmblaNextButton,
    EmblaNavigation,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  render() {
    return (
      <Embla direction="rtl">
        <EmblaWrapper>
          <EmblaContainer>
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const Flex = {
  render() {
    return (
      <Embla type="flex" align="start" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer>
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const FlexYAxis = {
  render() {
    return (
      <Embla type="flex" axis="y" align="start">
        <EmblaWrapper>
          <EmblaContainer className="h-[400px]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const Gap = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--gap:16px]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const SlidePerView = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
      </Embla>
    );
  },
} satisfies Story;

export const WithButtons = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <div className="mt-5 flex items-center gap-2">
          <EmblaPreButton />
          <EmblaNextButton />
        </div>
      </Embla>
    );
  },
} satisfies Story;

export const WithDotNavigation = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <EmblaNavigation className="mt-4" type="dot" />
      </Embla>
    );
  },
} satisfies Story;

export const WithDashNavigation = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <EmblaNavigation className="mt-4" type="dash" />
      </Embla>
    );
  },
} satisfies Story;

export const WithCustomNavigation = {
  render() {
    return (
      <Embla type="flex" direction="rtl">
        <EmblaWrapper>
          <EmblaContainer className="[--slide-per-view:4]">
            {Array.from({ length: 10 }, (_, idx) => (
              <EmblaSlide
                key={idx}
                className="[--slide-size:] flex h-[200px] items-center justify-center bg-grey-100"
              >
                slide {idx + 1}
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaWrapper>
        <EmblaNavigation
          className="mt-4"
          renderItems={({ isSelected }, idx, api) => (
            <span
              onClick={() => api?.scrollTo(idx)}
              key={idx}
              className={clsx(
                "size-2",
                isSelected ? "bg-primary" : "bg-gray-100",
              )}
            />
          )}
        />
      </Embla>
    );
  },
} satisfies Story;
