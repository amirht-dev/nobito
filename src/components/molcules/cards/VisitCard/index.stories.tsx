import type { Meta, StoryObj } from "@/types/storybook";
import VisitCard from ".";

const meta = {
  component: VisitCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "VisitCard",
} satisfies Story;
