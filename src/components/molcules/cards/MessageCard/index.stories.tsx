import type { Meta, StoryObj } from "@/types/storybook";
import MessageCard from ".";
import type { MessageCardProps } from "./index.types";

const variantOptions = ["notification", "order", "other"] as const;

const meta = {
  component: MessageCard,
  args: {
    variant: "other",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variantOptions,
      table: {
        type: {
          summary: variantOptions.map((v) => `"${v}"`).join(" | "),
        },
      },
    },
  },
} satisfies Meta<MessageCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Notification = {
  args: {
    variant: "notification",
  },
} satisfies Story;

export const Order = {
  args: {
    variant: "order",
  },
} satisfies Story;

export const Other = {
  args: {
    variant: "other",
  },
} satisfies Story;
