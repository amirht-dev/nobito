import type { Meta, StoryObj } from "@/types/storybook";
import Report from ".";

const meta = {
  component: Report,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Report",
} satisfies Story;
