import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const NoteText_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M8.75 3.5V2C8.75 1.59 8.41 1.25 8 1.25C7.59 1.25 7.25 1.59 7.25 2V3.56C7.5 3.53 7.73 3.5 8 3.5H8.75Z"
          fill={fillPath}
        />
        <path
          d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H16C16.27 3.5 16.5 3.53 16.75 3.56Z"
          fill={fillPath}
        />
        <path
          d="M16.75 3.56V5C16.75 5.41 16.41 5.75 16 5.75C15.59 5.75 15.25 5.41 15.25 5V3.5H8.75V5C8.75 5.41 8.41 5.75 8 5.75C7.59 5.75 7.25 5.41 7.25 5V3.56C4.3 3.83 3 5.73 3 8.5V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V8.5C21 5.73 19.7 3.83 16.75 3.56ZM12 16.75H8C7.59 16.75 7.25 16.41 7.25 16C7.25 15.59 7.59 15.25 8 15.25H12C12.41 15.25 12.75 15.59 12.75 16C12.75 16.41 12.41 16.75 12 16.75ZM16 11.75H8C7.59 11.75 7.25 11.41 7.25 11C7.25 10.59 7.59 10.25 8 10.25H16C16.41 10.25 16.75 10.59 16.75 11C16.75 11.41 16.41 11.75 16 11.75Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
NoteText_Bold.displayName = "NoteText_Bold";

export const NoteText_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
          fill={fillPath}
        />
        <path
          d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
          fill={fillPath}
        />
        <path
          d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
          fill={fillPath}
        />
        <path
          d="M16 11.75H8C7.59 11.75 7.25 11.41 7.25 11C7.25 10.59 7.59 10.25 8 10.25H16C16.41 10.25 16.75 10.59 16.75 11C16.75 11.41 16.41 11.75 16 11.75Z"
          fill={fillPath}
        />
        <path
          d="M12 16.75H8C7.59 16.75 7.25 16.41 7.25 16C7.25 15.59 7.59 15.25 8 15.25H12C12.41 15.25 12.75 15.59 12.75 16C12.75 16.41 12.41 16.75 12 16.75Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
NoteText_Outline.displayName = "NoteText_Outline";

const NoteText = { Outline: NoteText_Outline, Bold: NoteText_Bold };

export default NoteText;
