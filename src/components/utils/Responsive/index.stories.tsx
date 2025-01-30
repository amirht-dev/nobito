import Button from "@/components/atoms/buttons/Button";
import type { Meta, StoryObj } from "@/types/storybook";
import Responsive from ".";

const meta = {
  component: Responsive,
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Story = {
  render: () => (
    <Responsive
      component={Button}
      color={{ DEFAULT: "secondary", lg: "black", sm: "primary" }}
      size={{ DEFAULT: "sm", md: "md", lg: "lg", xl: "xl" }}
    >
      button
    </Responsive>
  ),
} satisfies Story;
