import type { Command, CommandInput } from "@/components/atoms/Command";
import type { InputProps } from "@/components/atoms/Input/index.types";
import type {
  ComponentPropsWithoutRef,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";
import type { Merge } from "type-fest";

export type SelectContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  value: string | undefined;
  onChange: ((value: string) => void) | undefined;
};

export type SelectOptionsListAsyncContextType = { isLoading: boolean };

export type SelectProps = PropsWithChildren<{
  value?: string;
  onChange?: (value: string) => void;
}>;

export type SelectOptionsListProps = PropsWithChildren<
  Merge<
    Pick<ComponentPropsWithoutRef<typeof Command>, "filter">,
    {
      inputProps?: ComponentPropsWithoutRef<typeof CommandInput>;
    }
  >
>;

export type SelectOptionsListAsyncProps = Merge<
  SelectOptionsListProps,
  {
    renderOption?: (
      item: { value: string; label: string },
      idx: number,
    ) => ReactNode;
    queryKey: string[];
    loadOptionsFn: () => Promise<{ label: string; value: string }[]>;
  }
>;

export type SelectFieldInputProps = { label: string } & Omit<
  InputProps,
  "suffixIcon"
>;
