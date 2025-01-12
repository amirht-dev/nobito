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

export const HistoryOfTurns = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: dashboardNavItems["history-of-turns"].href,
        segments: dashboardNavItems["history-of-turns"].href
          .split("/")
          .slice(2),
      },
    },
  },
} satisfies Story;

export const Massages = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: dashboardNavItems.messages.href,
        segments: dashboardNavItems.messages.href.split("/").slice(2),
      },
    },
  },
} satisfies Story;

export const MedicalRecord = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: dashboardNavItems["medical-record"].href,
        segments: dashboardNavItems["medical-record"].href.split("/").slice(2),
      },
    },
  },
} satisfies Story;

export const Feedbacks = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: dashboardNavItems.feedbacks.href,
        segments: dashboardNavItems.feedbacks.href.split("/").slice(2),
      },
    },
  },
} satisfies Story;
