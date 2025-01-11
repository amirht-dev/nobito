import type { Meta, StoryObj } from "@/types/storybook";
import DrugCard from ".";

const meta = {
  component: DrugCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "DrugCard",
} satisfies Story;
