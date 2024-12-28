import type { Meta, StoryObj } from "@/types/storybook";
import Banners from ".";

const meta = {
  component: Banners,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Banners",
} satisfies Story;
