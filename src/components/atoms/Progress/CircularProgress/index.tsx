"use client";

import { cn } from "@/utils/helpers";
import clamp from "lodash/clamp";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { forwardRef, useEffect, type ComponentPropsWithoutRef } from "react";
import type {
  CircularProgressIndicatorPropsProps,
  CircularProgressValuePropsProps,
} from "./index.types";

const CircularProgress = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("relative size-32 lg:size-[168px]", className)}
    />
  );
});
CircularProgress.displayName = "CircularProgress";

const CircularProgressIndicator = forwardRef<
  SVGCircleElement,
  CircularProgressIndicatorPropsProps
>(({ value = 0, ...props }, ref) => {
  return (
    <>
      <motion.circle
        fill="none"
        cx="50%"
        cy="50%"
        r="45%"
        className="stroke-grey-100 stroke-[length:10%]"
      />
      <motion.circle
        fill="none"
        {...props}
        ref={ref}
        cx="50%"
        cy="50%"
        r="45%"
        className="stroke-primary-500 stroke-[length:10%]"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: clamp(value, 0, 1),
        }}
        viewport={{
          once: true,
        }}
        transition={{
          pathLength: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.3,
          },
        }}
        style={{
          strokeLinecap: "round",
        }}
      />
    </>
  );
});
CircularProgressIndicator.displayName = "CircularProgressIndicator";

const CircularProgressValue = forwardRef<
  HTMLDivElement,
  CircularProgressValuePropsProps
>(({ value = 0, ...props }, ref) => {
  const _value = useMotionValue(0);

  const valuePercent = useTransform(
    _value,
    (val) => `${Math.round(val * 100)}%`,
  );

  useEffect(() => {
    const control = animate(_value, value, {
      duration: 1,
      ease: "easeInOut",
    });

    return () => {
      control.stop();
    };
  }, [value]);

  return (
    <motion.text
      className="text-[24px] font-medium text-black-400 lg:text-[28px]"
      x="50%"
      y="50%"
      textAnchor="middle"
    >
      {valuePercent}
    </motion.text>
  );
});
CircularProgressValue.displayName = "CircularProgressValue";

export { CircularProgress, CircularProgressIndicator, CircularProgressValue };
