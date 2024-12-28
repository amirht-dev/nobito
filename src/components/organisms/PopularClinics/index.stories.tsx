import type { Meta, StoryObj } from "@/types/storybook";
import PopularClinics from ".";

const meta = {
  component: PopularClinics,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "PopularClinics",
} satisfies Story;
