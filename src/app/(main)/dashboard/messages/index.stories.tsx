import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";
import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import MessagesPage from "./page";

const meta = {
  title: "Pages/Dashboard/Messages",
  component: MessagesPage,
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
      ...DashboardSidebarStories.Massages.parameters.nextjs,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Messages",
} satisfies Story;
