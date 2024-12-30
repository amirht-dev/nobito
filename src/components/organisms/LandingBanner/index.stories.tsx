import type { Meta, StoryObj } from "@/types/storybook";
import LandingBanner from ".";

const meta = {
  component: LandingBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "LandingBanner",
} satisfies Story;
