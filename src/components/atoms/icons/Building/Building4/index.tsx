import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Building4_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M11.3201 3H5.0901C3.1001 3 2.1001 4.01 2.1001 6.02V22H7.5001V18.25C7.5001 17.84 7.8401 17.5 8.2501 17.5C8.6601 17.5 9.0001 17.83 9.0001 18.25V22H14.3001V6.02C14.3001 4.01 13.3101 3 11.3201 3ZM10.7501 12.75H5.8001C5.3901 12.75 5.0501 12.41 5.0501 12C5.0501 11.59 5.3901 11.25 5.8001 11.25H10.7501C11.1601 11.25 11.5001 11.59 11.5001 12C11.5001 12.41 11.1601 12.75 10.7501 12.75ZM10.7501 9H5.8001C5.3901 9 5.0501 8.66 5.0501 8.25C5.0501 7.84 5.3901 7.5 5.8001 7.5H10.7501C11.1601 7.5 11.5001 7.84 11.5001 8.25C11.5001 8.66 11.1601 9 10.7501 9Z"
          fill={fillPath}
        />
        <path
          d="M23 21.25H20.73V18.25C21.68 17.94 22.37 17.05 22.37 16V14C22.37 12.69 21.3 11.62 19.99 11.62C18.68 11.62 17.61 12.69 17.61 14V16C17.61 17.04 18.29 17.92 19.22 18.24V21.25H1C0.59 21.25 0.25 21.59 0.25 22C0.25 22.41 0.59 22.75 1 22.75H19.93C19.95 22.75 19.96 22.76 19.98 22.76C20 22.76 20.01 22.75 20.03 22.75H23C23.41 22.75 23.75 22.41 23.75 22C23.75 21.59 23.41 21.25 23 21.25Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);

Building4_Bold.displayName = "Building4_Bold";

const Building4 = { bold: Building4_Bold };

export default Building4;
