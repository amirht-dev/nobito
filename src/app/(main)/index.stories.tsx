import type { Meta, StoryObj } from "@/types/storybook";
import MainLayout from "./layout";
import Home from "./page";

const meta = {
  title: "Pages/Home",
  component: Home,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <MainLayout>{Story()}</MainLayout>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Home",
} satisfies Story;
