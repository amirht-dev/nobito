import type { Meta, StoryObj } from "@/types/storybook";
import Footer from ".";

const meta = {
  component: Footer,
  tags: ["!autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Footer",
} satisfies Story;
