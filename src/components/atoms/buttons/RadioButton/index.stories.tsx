import type { Meta, StoryObj } from "@/types/storybook";
import { useState } from "react";
import { RadioButton, RadioGroup } from ".";

const meta = {
  subcomponents: {
    RadioButton,
    RadioGroup,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single = {
  render() {
    return <RadioButton value="option-1" />;
  },
} satisfies Story;

export const Multiple = {
  render() {
    return (
      <div className="space-x-2">
        <RadioButton name="group" value="option-1" />
        <RadioButton name="group" value="option-2" />
      </div>
    );
  },
} satisfies Story;

export const Controlled = {
  render() {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="space-x-2">
        <RadioButton
          name="group"
          onSelect={setValue}
          checked={value === "option-1"}
          value="option-1"
        />
        <RadioButton
          name="group"
          onSelect={setValue}
          checked={value === "option-2"}
          value="option-2"
        />
      </div>
    );
  },
} satisfies Story;

export const ControlledGroup = {
  render() {
    const [value, setValue] = useState<string | null>(null);
    return (
      <RadioGroup name="group" value={value} onChange={setValue}>
        <div className="space-x-2">
          <RadioButton value="option-1" />
          <RadioButton value="option-2" />
          <RadioButton value="option-3" />
          <RadioButton value="option-4" />
        </div>
      </RadioGroup>
    );
  },
} satisfies Story;
