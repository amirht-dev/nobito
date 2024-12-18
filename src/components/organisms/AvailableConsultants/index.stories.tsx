import type { Meta, StoryObj } from "@/types/storybook";
import AvailableConsultants from ".";

const meta = {
  component: AvailableConsultants,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "AvailableConsultants",
} satisfies Story;
