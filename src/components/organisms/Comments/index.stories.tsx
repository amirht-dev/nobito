import type { Meta, StoryObj } from "@/types/storybook";
import Comments from ".";

const meta = {
  component: Comments,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Comments",
} satisfies Story;
