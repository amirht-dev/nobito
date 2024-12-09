import type { Meta, StoryObj } from "@/types/storybook";
import DoctorCard from ".";
import type { DoctorCardProps } from "./index.types";

const meta = {
  component: DoctorCard,
  args: { fullWidth: false },
} satisfies Meta<DoctorCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;
