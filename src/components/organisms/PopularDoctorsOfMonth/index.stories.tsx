import type { Meta, StoryObj } from "@/types/storybook";
import PopularDoctorsOfMonth from ".";

const meta = {
  component: PopularDoctorsOfMonth,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "PopularDoctorsOfMonth",
} satisfies Story;
