import type { Meta, StoryObj } from "@/types/storybook";
import Logo from ".";
import type { ComponentProps, CSSProperties } from "react";
import type { Merge } from "type-fest";
import type { LogoProps } from "./index.types";
import { LOGO_VARIANTS } from "./index.constants";
import { formatStorybookOptions } from "@/utils/helpers";

const meta = {
  component: Logo,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: LOGO_VARIANTS,
      table: {
        type: {
          summary: formatStorybookOptions(LOGO_VARIANTS),
        },
      },
    },
  },
  args: {
    variant: "simple",
  },
} satisfies Meta<LogoProps>;

export default meta;

type Story<T = unknown> = StoryObj<Merge<ComponentProps<typeof Logo>, T>>;

export const Default = {} satisfies Story;

export const Simple = {
  args: {
    variant: "simple",
  },
} satisfies Story;

export const WithTitle = {
  args: {
    variant: "with-title",
  },
} satisfies Story;

export const WithTitleAndDesc = {
  args: {
    variant: "with-title-desc",
  },
} satisfies Story;

export const CustomSize = {
  args: {
    size: 50,
  },
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 50,
        max: 400,
        step: 10,
      },
    },
  },
  render({ size, style, ...args }) {
    return <Logo {...args} style={{ width: size, ...style }} />;
  },
} satisfies Story<{ size: number }>;

export const Story = {} satisfies Story;

export const CustomColor = {
  args: {
    primaryToneColor: "black",
    secondaryToneColor: "#ccc",
    neutralToneColor: "red",
  },
  argTypes: {
    primaryToneColor: {
      control: {
        type: "color",
        presetColors: ["#1F7168", "#4C8D86", "#515151"],
      },
    },
    secondaryToneColor: {
      control: {
        type: "color",
        presetColors: ["#1F7168", "#4C8D86", "#515151"],
      },
    },
    neutralToneColor: {
      control: {
        type: "color",
        presetColors: ["#1F7168", "#4C8D86", "#515151"],
      },
    },
  },
  render({
    primaryToneColor,
    secondaryToneColor,
    neutralToneColor,
    style,
    ...args
  }) {
    return (
      <Logo
        {...args}
        style={
          {
            "--primary-tone-clr": primaryToneColor,
            "--secondary-tone-clr": secondaryToneColor,
            "--neutral-tone-clr": neutralToneColor,
            ...style,
          } as CSSProperties
        }
      />
    );
  },
} satisfies Story<{
  primaryToneColor: string;
  secondaryToneColor: string;
  neutralToneColor: string;
}>;
