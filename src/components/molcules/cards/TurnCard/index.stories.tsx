import type { Meta, StoryObj } from "@/types/storybook";
import TurnCard from ".";

const meta = {
  component: TurnCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "TurnCard",
} satisfies Story;
