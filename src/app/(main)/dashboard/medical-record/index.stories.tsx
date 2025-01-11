import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "../../layout";
import DashboardLayout from "../layout";
import MedicalRecordPage from "./page";
import * as DashboardSidebarStories from "@/components/molcules/DashboardSidebar/index.stories";

const meta = {
  title: "Pages/Dashboard/MedicalRecord",
  component: MedicalRecordPage,
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
      ...DashboardSidebarStories.MedicalRecord.parameters.nextjs,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "MedicalRecord",
} satisfies Story;
