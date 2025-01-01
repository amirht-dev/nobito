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
      size="sm"
      sm={{ size: "sm", children: "button in small" }}
      md={{ size: "md", children: "button in medium" }}
      lg={{ size: "lg", children: "button in large" }}
      xl={{ size: "xl", children: "button in xlarge" }}
    >
      button
    </Responsive>
  ),
} satisfies Story;
