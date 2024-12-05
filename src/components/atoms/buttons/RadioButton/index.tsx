"use client";

import { cn } from "@/utils/helpers";
import { forwardRef } from "react";
import { RadioGroupContext, useRadioGroupContext } from "./index.constants";
import type { RadioButtonProps, RadioGroupProps } from "./index.types";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ value, onSelect, onChange, ...props }, ref) => {
    const ctx = useRadioGroupContext();

    return (
      <label className="inline-block cursor-pointer">
        <input
          {...props}
          value={value}
          name={props.name ?? ctx?.name}
          className={cn("peer hidden size-0 appearance-none", props.className)}
          checked={props.checked ?? ctx?.value === value}
          onChange={(e) => {
            onChange?.(e);
            onSelect?.(value);
            ctx?.onChange?.(value);
          }}
          type="radio"
          ref={ref}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="peer-checked:hidden"
        >
          <path
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.01227 12C2.01227 17.5161 6.48393 21.9877 12 21.9877C17.5161 21.9877 21.9877 17.5161 21.9877 12C21.9877 6.48393 17.5161 2.01227 12 2.01227C6.48393 2.01227 2.01227 6.48393 2.01227 12Z"
            fill="#919191"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden peer-checked:block"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM12 17C14.7612 17 17 14.7614 17 12C17 9.23859 14.7612 7 12 7C9.23877 7 7 9.23859 7 12C7 14.7614 9.23877 17 12 17Z"
            fill="#195A53"
          />
        </svg>
      </label>
    );
  },
);
RadioButton.displayName = "RadioButton";

const RadioGroup = ({ children, value, onChange, name }: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange, name }}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export { RadioButton, RadioGroup };
