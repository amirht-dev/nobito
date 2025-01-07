import type { Meta, StoryObj } from "@/types/storybook";
import Alert from ".";
import type { AlertProps } from "./index.types";

const meta = {
  component: Alert,
  args: {
    description:
      "با تکمیل اطلاعات هویتی خود می توانید از امکاناتی مثل فروشگاه استفاده کنید",
  },
} satisfies Meta<AlertProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;
