import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const ArrowCircleRight_Outline = forwardRef<
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
        d="M14.5 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H14.5C14.91 11.25 15.25 11.59 15.25 12C15.25 12.41 14.91 12.75 14.5 12.75Z"
        fill={fillPath}
      />
      <path
        d="M12.5014 15.7514C12.3114 15.7514 12.1214 15.6814 11.9714 15.5314C11.6814 15.2414 11.6814 14.7614 11.9714 14.4714L14.4414 12.0014L11.9714 9.53141C11.6814 9.24141 11.6814 8.76141 11.9714 8.47141C12.2614 8.18141 12.7414 8.18141 13.0314 8.47141L16.0314 11.4714C16.3214 11.7614 16.3214 12.2414 16.0314 12.5314L13.0314 15.5314C12.8814 15.6814 12.6914 15.7514 12.5014 15.7514Z"
        fill={fillPath}
      />
    </svg>
  );
});
ArrowCircleRight_Outline.displayName = "ArrowCircleRightOutline";

const ArrowCircleRight = { Outline: ArrowCircleRight_Outline };

export default ArrowCircleRight;
