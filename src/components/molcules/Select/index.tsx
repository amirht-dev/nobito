"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/Command";
import { ChevronDown_Outline } from "@/components/atoms/icons/Arrow/ChevronDown";
import { Field, FieldLabel, Input } from "@/components/atoms/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import { Skeleton } from "@/components/atoms/Skeleton";
import type { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { cn } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import {
  SelectContext,
  SelectOptionsListAsyncContext,
  useSelectContext,
  useSelectOptionsListAsyncContext,
} from "./index.constants";
import type {
  SelectFieldInputProps,
  SelectOptionsListAsyncProps,
  SelectOptionsListProps,
  SelectProps,
} from "./index.types";

const Select = ({ children, value, onChange }: SelectProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <SelectContext.Provider value={{ value, onChange, setOpen, open }}>
        {children}
      </SelectContext.Provider>
    </Popover>
  );
};

const SelectFieldInput = forwardRef<
  ElementRef<typeof Input>,
  SelectFieldInputProps
>(({ label, disabled, id, required, ...props }, ref) => {
  const { value } = useSelectContext();

  return (
    <PopoverTrigger className="group" disabled={disabled} asChild>
      <Field id={id} required={required}>
        <FieldLabel>{label}</FieldLabel>
        <Input
          {...props}
          disabled={disabled}
          value={props.value ?? value}
          ref={ref}
          fullWidth
          suffixIcon={
            <button disabled={disabled} type="button">
              <ChevronDown_Outline className="size-6 transition-all group-data-[state=open]:rotate-180" />
            </button>
          }
        />
      </Field>
    </PopoverTrigger>
  );
});
SelectFieldInput.displayName = "SelectFieldInput";

const SelectEmpty = forwardRef<
  ElementRef<typeof CommandEmpty>,
  ComponentPropsWithoutRef<typeof CommandEmpty>
>((props, ref) => {
  const ctx = useSelectOptionsListAsyncContext({ throw: false });

  if (ctx && ctx.isLoading) return null;

  return <CommandEmpty {...props} ref={ref} />;
});
SelectEmpty.displayName = "SelectEmpty";

const SelectOptionsList = ({
  children,
  inputProps,
  filter,
}: SelectOptionsListProps) => {
  return (
    <PopoverContent className="w-[--radix-popover-trigger-width]" dir="rtl">
      <Command filter={filter}>
        <CommandInput {...inputProps} />
        <CommandList>{children}</CommandList>
      </Command>
    </PopoverContent>
  );
};

const SelectOptionsListAsync = ({
  children,
  queryKey,
  loadOptionsFn,
  renderOption = (item) => (
    <SelectOption value={item.value} key={item.value}>
      {item.label}
    </SelectOption>
  ),
  ...props
}: SelectOptionsListAsyncProps) => {
  const { open } = useSelectContext();

  const { isLoading, data } = useQuery({
    queryKey: queryKey,
    queryFn: loadOptionsFn,
    enabled: open,
  });
  return (
    <SelectOptionsList {...props}>
      <SelectOptionsListAsyncContext.Provider value={{ isLoading }}>
        {data?.map(renderOption)}
        {children}
      </SelectOptionsListAsyncContext.Provider>
    </SelectOptionsList>
  );
};

const SelectLoading = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRefWithProps<
    "div",
    {
      skeletonCount?: number;
    }
  >
>(({ children, skeletonCount = 3, ...props }, ref) => {
  const { isLoading } = useSelectOptionsListAsyncContext();

  if (isLoading)
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "py-2 text-center",
          !children && "flex flex-col gap-2",
          props.className,
        )}
      >
        {children ??
          Array.from({ length: skeletonCount }, (_, idx) => (
            <Skeleton key={idx} className="h-8" />
          ))}
      </div>
    );
});
SelectLoading.displayName = "SelectLoading";

const SelectOption = forwardRef<
  ElementRef<typeof CommandItem>,
  ComponentPropsWithoutRef<typeof CommandItem>
>((props, ref) => {
  const { onChange, setOpen } = useSelectContext();
  return (
    <CommandItem
      {...props}
      ref={ref}
      onSelect={(value) => {
        props.onSelect?.(value);
        onChange?.(value);
        setOpen(false);
      }}
    />
  );
});
SelectOption.displayName = "SelectOption";

export {
  Select,
  SelectEmpty,
  SelectFieldInput,
  SelectLoading,
  SelectOption,
  SelectOptionsList,
  SelectOptionsListAsync,
};
