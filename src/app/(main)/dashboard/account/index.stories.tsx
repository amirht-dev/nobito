import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";
import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import DashboardAccountPage from "./page";

const meta = {
  title: "Pages/Dashboard/Account",
  component: DashboardAccountPage,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      ...DashboardSidebarStories.Account.parameters.nextjs,
    },
  },
  decorators: [
    (Story) => (
      <MainLayout>
        <DashboardLayout>{Story()}</DashboardLayout>
      </MainLayout>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Account",
} satisfies Story;
