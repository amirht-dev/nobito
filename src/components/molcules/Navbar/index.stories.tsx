import type { Meta, StoryObj } from "@/types/storybook";
import Navbar from ".";

const meta = {
  component: Navbar,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Navbar",
} satisfies Story;
