import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import HistoryOfTurnsPage from "./page";
import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";

const meta = {
  title: "Pages/Dashboard/HistoryOfTurns",
  component: HistoryOfTurnsPage,
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
      ...DashboardSidebarStories.HistoryOfTurns.parameters.nextjs,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "HistoryOfTurns",
} satisfies Story;
