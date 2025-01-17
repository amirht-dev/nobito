import type { Meta, StoryObj } from "@/types/storybook";
import { useArgs } from "@storybook/preview-api";
import Rating from ".";
import type { RatingProps } from "./index.types";
import { fn } from "@storybook/test";

const meta = {
  component: Rating,
  args: {
    onChange: fn(),
    value: 3,
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<RatingProps>();
    return (
      <Rating
        {...args}
        value={value}
        onChange={(value) => {
          args.onChange?.(value);
          updateArgs({ value });
        }}
      />
    );
  },
} satisfies Meta<RatingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const CustomCount = {
  args: {
    count: 10,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Readonly = {
  args: {
    readonly: true,
  },
} satisfies Story;
