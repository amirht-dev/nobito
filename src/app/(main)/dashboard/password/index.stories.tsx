import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";
import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import PasswordPage from "./page";

const meta = {
  title: "Pages/Dashboard/Password",
  component: PasswordPage,
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
      ...DashboardSidebarStories.Password.parameters.nextjs,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Password",
} satisfies Story;
