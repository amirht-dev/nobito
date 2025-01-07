import { dashboardNavItems } from "@/constants/dashboard";
import type { Meta, StoryObj } from "@/types/storybook";
import DashboardSidebar from ".";

const meta = {
  component: DashboardSidebar,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Account = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: dashboardNavItems.account.href,
        segments: dashboardNavItems.account.href.split("/").slice(2),
      },
    },
  },
} satisfies Story;
