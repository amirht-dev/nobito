"use client";

import { tv } from "@/lib/tv";
import { createCTX } from "@/utils/clientHelpers";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type {
  FieldContextType,
  FieldProps,
  InputProps,
  TextareaProps,
} from "./index.types";

const { context: FieldContext, hook: useFieldContext } =
  createCTX<FieldContextType>("Field");

export const inputVariants = tv({
  slots: {
    container:
      "rounded-lg border border-transparent bg-grey-50 text-tittle-2 font-medium focus-within:border-primary-500 focus-within:text-primary-500 data-[fill]:border data-[fill]:border-black-400 data-[fill]:text-black-400 focus-within:data-[fill]:border-primary-500 focus-within:data-[fill]:text-primary-500 transition-all",
    input: "outline-none border-none w-full bg-transparent transition-all",
    icon: "text-grey-400 group-focus-within:text-primary-500 group-has-[input[data-fill]]:text-black-400 group-focus-within:group-has-[input[data-fill]]:text-primary-500 transition-all",
  },
  variants: {
    size: {
      sm: {
        container: "px-3 py-3",
        icon: "size-[18px]",
      },
      md: {
        container: "px-4 py-3",
        icon: "size-6",
      },
      responsive: {
        container: "px-3 py-3 lg:px-4 lg:py-4",
        icon: "size-[18px] lg:size-6",
      },
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
    icon: {
      true: {
        container: "flex group items-center gap-2",
        input: "flex-1",
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      fullWidth: false,
      className: {
        container: "w-[296px]",
      },
    },
    {
      size: "md",
      fullWidth: false,
      className: {
        container: "w-[360px]",
      },
    },
    {
      size: "responsive",
      fullWidth: false,
      className: {
        container: "w-[296px] lg:w-[360px]",
      },
    },
  ],
  defaultVariants: {
    fullWidth: false,
    size: "md",
  },
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size, fullWidth, prefixIcon, suffixIcon, containerProps, ...props },
    ref,
  ) => {
    const ctx = useFieldContext({ throw: false });
    const cns = inputVariants({
      size,
      fullWidth,
      icon: !!prefixIcon || !!suffixIcon,
    });
    return (
      <div
        {...containerProps}
        {...(props.value && { "data-fill": true })}
        className={cns.container({ className: containerProps?.className })}
      >
        <Slot className={cns.icon()}>{prefixIcon}</Slot>
        <input
          {...props}
          {...(props.value && { "data-fill": true })}
          required={props.required ?? ctx?.required}
          id={props.id ?? ctx?.id}
          ref={ref}
          className={cns.input({ className: props.className })}
        />
        <Slot className={cns.icon()}>{suffixIcon}</Slot>
      </div>
    );
  },
);
Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, fullWidth = true, containerProps, ...props }, ref) => {
    const ctx = useFieldContext({ throw: false });
    const cns = inputVariants({
      size,
      fullWidth,
    });
    return (
      <div
        {...containerProps}
        {...(props.value && { "data-fill": true })}
        className={cns.container({ className: containerProps?.className })}
      >
        <textarea
          {...props}
          {...(props.value && { "data-fill": true })}
          required={props.required ?? ctx?.required}
          id={props.id ?? ctx?.id}
          ref={ref}
          className={cns.input({ className: props.className })}
        />
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ id, required = false, className, ...props }, ref) => {
    return (
      <FieldContext.Provider value={{ id, required }}>
        <div
          {...props}
          ref={ref}
          className={cn(
            "group space-y-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(:disabled)_*]:cursor-not-allowed",
            className,
          )}
        />
      </FieldContext.Provider>
    );
  },
);

Field.displayName = "Field";

const FieldLabel = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<"label">
>(({ children, ...props }, ref) => {
  const { id, required } = useFieldContext();

  return (
    <label
      {...props}
      htmlFor={id}
      ref={ref}
      className={clsx(
        "block text-start text-tittle-3 font-normal text-grey-400 transition-all group-focus-within:text-primary-500 group-has-[input[data-fill]]:text-black-400 group-focus-within:group-has-[input[data-fill]]:text-primary-500",
      )}
    >
      {children}
      {required && <span className="ms-2 text-error-500">*</span>}
    </label>
  );
});

FieldLabel.displayName = "FieldLabel";

export { Field, FieldLabel, Input, Textarea };
