import type { Meta, StoryObj } from "@/types/storybook";
import Chip from ".";
import { CloseCircle_Outline } from "../icons/Essesional/CloseCircle";
import type { ChipProps } from "./index.types";

const meta = {
  component: Chip,
  args: {
    children: "سالن انتظار",
  },
  argTypes: {
    prefixIcon: {
      control: "boolean",
      mapping: {
        true: <CloseCircle_Outline />,
        false: null,
      },
    },
    suffixIcon: {
      control: "boolean",
      mapping: {
        true: <CloseCircle_Outline />,
        false: null,
      },
    },
  },
} satisfies Meta<ChipProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const WithPrefixIcon = {
  args: {
    prefixIcon: true,
  },
} satisfies Story;

export const WithSuffixIcon = {
  args: {
    suffixIcon: true,
  },
} satisfies Story;

export const WithBothIcons = {
  args: {
    prefixIcon: true,
    suffixIcon: true,
  },
} satisfies Story;
