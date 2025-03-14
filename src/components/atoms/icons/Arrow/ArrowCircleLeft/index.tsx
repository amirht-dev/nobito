import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const ArrowCircleLeft_Outline = forwardRef<
  SVGSVGElement,
  SVGIconProps<"#292D32">
>(({ fillPath = "currentColor", ...props }, ref) => {
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
        d="M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"
        fill={fillPath}
      />
      <path
        d="M11.5014 15.7514C11.3114 15.7514 11.1214 15.6814 10.9714 15.5314L7.97141 12.5314C7.68141 12.2414 7.68141 11.7614 7.97141 11.4714L10.9714 8.47141C11.2614 8.18141 11.7414 8.18141 12.0314 8.47141C12.3214 8.76141 12.3214 9.24141 12.0314 9.53141L9.56141 12.0014L12.0314 14.4714C12.3214 14.7614 12.3214 15.2414 12.0314 15.5314C11.8814 15.6814 11.6914 15.7514 11.5014 15.7514Z"
        fill={fillPath}
      />
    </svg>
  );
});
ArrowCircleLeft_Outline.displayName = "ArrowCircleLeftOutline";

const ArrowCircleLeft = { Outline: ArrowCircleLeft_Outline };

export default ArrowCircleLeft;
