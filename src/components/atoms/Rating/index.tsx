"use client";

import { cn } from "@/utils/helpers";
import clsx from "clsx";
import { forwardRef } from "react";
import {
  Star1_Bold,
  Star1_Outline,
} from "../icons/Support-Like-Question/Star1";
import type { RatingProps } from "./index.types";

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      count = 5,
      value,
      onChange,
      disabled = false,
      readonly = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("flex items-center gap-2", className)}
      >
        {Array.from({ length: count }, (_, idx) => {
          const active = value && idx <= value;
          const Icon = active ? Star1_Bold : Star1_Outline;

          const handleChange = (idx: number) => {
            if (readonly || disabled) return;
            onChange?.(idx);
          };

          return (
            <button
              key={idx}
              onClick={() => handleChange(idx)}
              aria-readonly={readonly}
              aria-disabled={disabled}
              disabled={disabled}
              className={clsx(
                "disabled:cursor-not-allowed disabled:opacity-40 aria-readonly:cursor-auto",
                active ? "text-secondary-600" : "text-grey-500",
              )}
            >
              <Icon className="size-6" />
            </button>
          );
        })}
      </div>
    );
  },
);
Rating.displayName = "Rating";

export default Rating;
