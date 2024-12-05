import type { Meta, StoryObj } from "@/types/storybook";
import type { IconButtonProps } from "./index.types";
import IconButton from ".";
import { Bootstrap_Outline } from "../../icons/Crypto-Company/Bootstrap";

const meta = {
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 10,
        max: 128,
        step: 2,
      },
    },
  },
  render({ size, ...args }) {
    return (
      <IconButton {...args}>
        <Bootstrap_Outline style={{ width: size, height: size }} />
      </IconButton>
    );
  },
} satisfies Meta<IconButtonProps & { size?: number }>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Size16 = {
  args: {
    size: 16,
  },
} satisfies Story;

export const Size18 = {
  args: {
    size: 18,
  },
} satisfies Story;

export const Size24 = {
  args: {
    size: 24,
  },
} satisfies Story;

export const Size36 = {
  args: {
    size: 36,
  },
} satisfies Story;
