import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Folder2_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.42 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.58 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.62 2.75 8.5 2.75H7Z"
          fill={fillPath}
        />
        <path
          d="M20 7.13C19.59 7.13 19.25 6.79 19.25 6.38V5C19.25 3.42 18.58 2.75 17 2.75H8C7.59 2.75 7.25 2.41 7.25 2C7.25 1.59 7.59 1.25 8 1.25H17C19.42 1.25 20.75 2.58 20.75 5V6.38C20.75 6.79 20.41 7.13 20 7.13Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Folder2_Outline.displayName = "Folder2_Outline";

export const Folder2_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M19.4347 4.03448C19.567 4.2424 19.3404 4.48461 19.1001 4.43C18.6301 4.29 18.1101 4.22 17.5801 4.22H14.2798C14.1226 4.22 13.9745 4.14605 13.8801 4.02037L12.7301 2.49C12.5892 2.29044 12.7224 2 12.9666 2H15.7201C17.2811 2 18.6561 2.81073 19.4347 4.03448Z"
          fill={fillPath}
        />
        <path
          d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.39 16.34H9.6C9.21 16.34 8.91 16.03 8.91 15.64C8.91 15.26 9.21 14.94 9.6 14.94H14.39C14.78 14.94 15.09 15.26 15.09 15.64C15.09 16.03 14.78 16.34 14.39 16.34Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Folder2_Bold.displayName = "Folder2_Bold";

const Folder2 = { Outline: Folder2_Outline, Bold: Folder2_Bold };

export default Folder2;
