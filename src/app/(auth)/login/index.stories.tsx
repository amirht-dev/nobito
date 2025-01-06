import type { Meta, StoryObj } from "@/types/storybook";
import Login from "./page";

const meta = {
  title: "Pages/Login",
  component: Login,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Login",
} satisfies Story;
