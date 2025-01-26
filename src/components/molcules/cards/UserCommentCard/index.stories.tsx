import type { Meta, StoryObj } from "@/types/storybook";
import UserCommentCard from ".";
import type { UserCommentCardProps } from "./index.types";

const meta = {
  component: UserCommentCard,
  args: {
    satisfied: true,
  },
  argTypes: {
    satisfied: {
      control: "boolean",
    },
  },
} satisfies Meta<UserCommentCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const Satisfied = {
  args: {
    satisfied: true,
  },
} satisfies Story;

export const Dissatisfied = {
  args: {
    satisfied: false,
  },
} satisfies Story;
