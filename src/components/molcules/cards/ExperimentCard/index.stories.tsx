import type { Meta, StoryObj } from "@/types/storybook";
import ExperimentCard from ".";

const meta = {
  component: ExperimentCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "ExperimentCard",
} satisfies Story;
