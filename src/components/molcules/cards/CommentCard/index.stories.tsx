import type { Meta, StoryObj } from "@/types/storybook";
import CommentCard from ".";
import type { CommentCardProps } from "./index.types";

const meta = {
  component: CommentCard,
  args: {
    size: "md",
    fullWidth: false,
  },
} satisfies Meta<CommentCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;
