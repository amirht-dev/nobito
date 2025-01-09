import { fetchStates } from "@/services/locationsApi";
import type { Meta, StoryObj } from "@/types/storybook";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import { type ComponentPropsWithoutRef } from "react";
import {
  Select,
  SelectFieldInput,
  SelectLoading,
  SelectOption,
  SelectOptionsList,
  SelectOptionsListAsync,
} from ".";
import { wait } from "@/utils/helpers";

const options = [
  {
    label: "تهران",
    value: "tehran",
  },
  {
    label: "شیراز",
    value: "shiraz",
  },
  {
    label: "مشهد",
    value: "mashhad",
  },
];

type Args = {
  Select?: Partial<ComponentPropsWithoutRef<typeof Select>>;
  SelectFieldInput?: Partial<ComponentPropsWithoutRef<typeof SelectFieldInput>>;
  SelectOption?: Partial<ComponentPropsWithoutRef<typeof SelectOption>>;
  SelectOptionsList?: Partial<
    ComponentPropsWithoutRef<typeof SelectOptionsList>
  >;
};

const meta = {
  subcomponents: { Select, SelectFieldInput, SelectOption, SelectOptionsList },
} satisfies Meta<Args>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const DirectPassControls = {
  args: {
    value: undefined,
    onSelect: fn(),
  },
  render(args) {
    const [{ value }, setArgs] = useArgs();
    return (
      <Select>
        <SelectFieldInput label="نام" value={value} readOnly />

        <SelectOptionsList inputProps={{ placeholder: "جستجو شهر" }}>
          {options.map((option) => (
            <SelectOption
              key={option.value}
              value={option.label}
              onSelect={(value) => {
                setArgs({ value });
                args.onSelect?.(value);
              }}
            >
              {option.label}
            </SelectOption>
          ))}
        </SelectOptionsList>
      </Select>
    );
  },
} satisfies Story<{
  value: string;
  onSelect: (value: string) => void;
}>;

export const ParentPassControl = {
  args: {
    value: undefined,
    onChange: fn(),
  },
  render(args) {
    const [{ value }, setArgs] = useArgs();
    return (
      <Select
        value={value}
        onChange={(value) => {
          args.onChange?.(value);
          setArgs({ value });
        }}
      >
        <SelectFieldInput label="نام" readOnly />

        <SelectOptionsList inputProps={{ placeholder: "جستجو شهر" }}>
          {options.map((option) => (
            <SelectOption key={option.value} value={option.label}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptionsList>
      </Select>
    );
  },
} satisfies Story<{
  value: string;
  onChange: (value: string) => void;
}>;

export const AsyncOptions = {
  args: {
    value: undefined,
    onChange: fn(),
  },
  render(args) {
    const [{ value }, setArgs] = useArgs();
    return (
      <Select
        value={value}
        onChange={(value) => {
          args.onChange?.(value);
          setArgs({ value });
        }}
      >
        <SelectFieldInput label="نام" readOnly />

        <SelectOptionsListAsync
          queryKey={["states"]}
          loadOptionsFn={async () => {
            await wait();
            const states = await fetchStates();
            return states.map((state) => ({
              value: state.name,
              label: state.name,
            }));
          }}
          inputProps={{ placeholder: "جستجو شهر" }}
        >
          <SelectLoading>loading states...</SelectLoading>
        </SelectOptionsListAsync>
      </Select>
    );
  },
} satisfies Story<{
  value: string;
  onChange: (value: string) => void;
}>;
