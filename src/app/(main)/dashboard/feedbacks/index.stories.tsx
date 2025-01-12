import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";
import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import FeedbacksPage from "./page";

const meta = {
  title: "Pages/Dashboard/Feedbacks",
  component: FeedbacksPage,
  tags: ["!autodocs"],
  decorators: [
    (Story) => (
      <MainLayout>
        <DashboardLayout>{Story()}</DashboardLayout>
      </MainLayout>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      ...DashboardSidebarStories.Feedbacks.parameters.nextjs,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Feedbacks",
} satisfies Story;
