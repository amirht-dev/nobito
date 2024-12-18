import type { Meta, StoryObj } from "@/types/storybook";
import ReserveDoctorCard from ".";
import type { ReserveDoctorCardProps } from "./index.types";

const meta = {
  component: ReserveDoctorCard,
  args: { fullWidth: false },
} satisfies Meta<ReserveDoctorCardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;
