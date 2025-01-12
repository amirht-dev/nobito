import type { Meta, StoryObj } from "@/types/storybook";
import FeedbackCard from ".";

const meta = {
  component: FeedbackCard,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "FeedbackCard",
} satisfies Story;
