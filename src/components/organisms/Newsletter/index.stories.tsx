import type { Meta, StoryObj } from "@/types/storybook";
import Newsletter from ".";

const meta = {
  component: Newsletter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Newsletter",
} satisfies Story;
