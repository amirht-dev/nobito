import type { Meta, StoryObj } from "@/types/storybook";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import { Field, FieldLabel, Input } from ".";
import type { InputProps } from "./index.types";
import { SMS_Bold } from "../icons/Emails-Messages/SMS";
import { ChevronDown_Outline } from "../icons/Arrow/ChevronDown";

const meta = {
  component: Input,
  args: {
    value: "",
    onChange: fn(),
  },
  argTypes: {
    prefixIcon: {
      control: "boolean",
      mapping: {
        true: <SMS_Bold />,
      },
    },
    suffixIcon: {
      control: "boolean",
      mapping: {
        true: <ChevronDown_Outline />,
      },
    },
  },
  render(args) {
    const [{ value }, setArgs] = useArgs<InputProps>();
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          args.onChange?.(e);
          setArgs({ value: e.target.value });
        }}
      />
    );
  },
} satisfies Meta<InputProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Story = {} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story;

export const ResponsiveSize = {
  args: {
    size: "responsive",
  },
} satisfies Story;

export const FullWidth = {
  args: {
    fullWidth: true,
  },
} satisfies Story;

export const PrefixIcon = {
  args: {
    prefixIcon: true,
  },
} satisfies Story;

export const SuffixIcon = {
  args: {
    suffixIcon: true,
  },
} satisfies Story;

export const BothIcons = {
  args: {
    prefixIcon: true,
    suffixIcon: true,
  },
} satisfies Story;

export const WithLabel = {
  args: {
    value: "",
    onChange: fn(),
  },
  render(args) {
    const [{ value }, setArgs] = useArgs();
    return (
      <Field>
        <FieldLabel htmlFor="input">نام</FieldLabel>
        <Input
          {...args}
          id="input"
          value={value}
          onChange={(e) => {
            args.onChange?.(e);
            setArgs({ value: e.target.value });
          }}
        />
      </Field>
    );
  },
} satisfies Story<
  Pick<InputProps, "value" | "onChange" | "prefixIcon" | "suffixIcon">
>;
