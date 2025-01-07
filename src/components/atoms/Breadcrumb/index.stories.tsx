import type { Meta, StoryObj } from "@/types/storybook";
import { Breadcrumb, BreadcrumbItem } from ".";

const meta = {
  subcomponents: { Breadcrumb, BreadcrumbItem },
  component: Breadcrumb,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short = {
  render() {
    return (
      <Breadcrumb>
        {Array.from({ length: 4 }, (_, idx) => (
          <BreadcrumbItem key={idx}>آیتم {idx + 1}</BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  },
} satisfies Story;

export const Long = {
  render() {
    return (
      <Breadcrumb>
        {Array.from({ length: 20 }, (_, idx) => (
          <BreadcrumbItem key={idx}>آیتم {idx + 1}</BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  },
} satisfies Story;
