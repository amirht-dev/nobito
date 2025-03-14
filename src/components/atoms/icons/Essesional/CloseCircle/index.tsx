import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const CloseCircle_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M9.17 15.5801C8.98 15.5801 8.79 15.5101 8.64 15.3601C8.35 15.0701 8.35 14.5901 8.64 14.3001L14.3 8.64011C14.59 8.35011 15.07 8.35011 15.36 8.64011C15.65 8.93011 15.65 9.41011 15.36 9.70011L9.7 15.3601C9.56 15.5101 9.36 15.5801 9.17 15.5801Z"
          fill={fillPath}
        />
        <path
          d="M14.83 15.5801C14.64 15.5801 14.45 15.5101 14.3 15.3601L8.64 9.70011C8.35 9.41011 8.35 8.93011 8.64 8.64011C8.93 8.35011 9.41 8.35011 9.7 8.64011L15.36 14.3001C15.65 14.5901 15.65 15.0701 15.36 15.3601C15.21 15.5101 15.02 15.5801 14.83 15.5801Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
CloseCircle_Outline.displayName = "CloseCircleOutline";

const CloseCircle = { Outline: CloseCircle_Outline };

export default CloseCircle;
