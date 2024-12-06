import type { Meta, StoryObj } from "@/types/storybook";
import SearchBox from ".";

const meta = {
  component: SearchBox,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "SearchBox",
} satisfies Story;
