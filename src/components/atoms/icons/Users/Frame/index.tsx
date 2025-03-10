import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Frame_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
          fill={fillPath}
        />
        <path
          d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Frame_Bold.displayName = "Frame_Bold";

export const Frame_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M12.1601 11.62C12.1301 11.62 12.1101 11.62 12.0801 11.62C12.0301 11.61 11.9601 11.61 11.9001 11.62C9.00006 11.53 6.81006 9.25 6.81006 6.44C6.81006 3.58 9.14006 1.25 12.0001 1.25C14.8601 1.25 17.1901 3.58 17.1901 6.44C17.1801 9.25 14.9801 11.53 12.1901 11.62C12.1801 11.62 12.1701 11.62 12.1601 11.62ZM12.0001 2.75C9.97006 2.75 8.31006 4.41 8.31006 6.44C8.31006 8.44 9.87006 10.05 11.8601 10.12C11.9101 10.11 12.0501 10.11 12.1801 10.12C14.1401 10.03 15.6801 8.42 15.6901 6.44C15.6901 4.41 14.0301 2.75 12.0001 2.75Z"
          fill={fillPath}
        />
        <path
          d="M12.1701 22.55C10.2101 22.55 8.2401 22.05 6.7501 21.05C5.3601 20.13 4.6001 18.87 4.6001 17.5C4.6001 16.13 5.3601 14.86 6.7501 13.93C9.7501 11.94 14.6101 11.94 17.5901 13.93C18.9701 14.85 19.7401 16.11 19.7401 17.48C19.7401 18.85 18.9801 20.12 17.5901 21.05C16.0901 22.05 14.1301 22.55 12.1701 22.55ZM7.5801 15.19C6.6201 15.83 6.1001 16.65 6.1001 17.51C6.1001 18.36 6.6301 19.18 7.5801 19.81C10.0701 21.48 14.2701 21.48 16.7601 19.81C17.7201 19.17 18.2401 18.35 18.2401 17.49C18.2401 16.64 17.7101 15.82 16.7601 15.19C14.2701 13.53 10.0701 13.53 7.5801 15.19Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Frame_Outline.displayName = "Frame_Outline";

const Frame = { Bold: Frame_Bold, Outline: Frame_Outline };

export default Frame;
