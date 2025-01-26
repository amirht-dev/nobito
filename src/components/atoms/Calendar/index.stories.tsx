import type { Meta, StoryObj } from "@/types/storybook";
import { useState } from "react";
import type { CalendarProps, Value } from "react-multi-date-picker";
import Calendar from ".";

const meta = {
  component: Calendar,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
  render(args) {
    const [value, setValue] = useState<Value>();

    return <Calendar {...args} value={value} onChange={setValue} />;
  },
} satisfies Meta<CalendarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single = {
  render(args) {
    const [value, setValue] = useState<Value>();

    return <Calendar {...args} value={value} onChange={setValue} />;
  },
} satisfies Story;

export const Multiple = {
  render(args) {
    const [value, setValue] = useState<Value[]>([]);

    return (
      <Calendar
        {...args}
        multiple
        value={value}
        onChange={(value) => {
          if (!value || !Array.isArray(value)) return;
          setValue(value);
        }}
      />
    );
  },
} satisfies Story;

export const SingleRange = {
  render(args) {
    const [value, setValue] = useState<Value[]>([]);

    return (
      <Calendar
        {...args}
        range
        value={value}
        onChange={(value) => {
          if (!value || !Array.isArray(value)) return;
          setValue(value);
        }}
      />
    );
  },
} satisfies Story;
