import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const TickCircle_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
          fill={fillPath}
        />
        <path
          d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.22 12.5301C6.93 12.2401 6.93 11.7601 7.22 11.4701C7.51 11.1801 7.99 11.1801 8.28 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
TickCircle_Outline.displayName = "TickCircle_Outline";

const TickCircle = { Outline: TickCircle_Outline };

export default TickCircle;
