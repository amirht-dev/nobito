import type { Meta, StoryObj } from "@/types/storybook";
import HashTag from ".";
import type { HashTagProps } from "./index.types";

const meta = {
  component: HashTag,
  args: {
    children: "تگ",
  },
  tags: ["!autodocs"],
} satisfies Meta<HashTagProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "HashTag",
} satisfies Story;
