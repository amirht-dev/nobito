import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const ChevronDown_Outline = forwardRef<
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
        d="M11.9995 16.8006C11.2995 16.8006 10.5995 16.5306 10.0695 16.0006L3.54953 9.48062C3.25953 9.19062 3.25953 8.71062 3.54953 8.42063C3.83953 8.13063 4.31953 8.13063 4.60953 8.42063L11.1295 14.9406C11.6095 15.4206 12.3895 15.4206 12.8695 14.9406L19.3895 8.42063C19.6795 8.13063 20.1595 8.13063 20.4495 8.42063C20.7395 8.71062 20.7395 9.19062 20.4495 9.48062L13.9295 16.0006C13.3995 16.5306 12.6995 16.8006 11.9995 16.8006Z"
        fill={fillPath}
      />
    </svg>
  );
});
ChevronDown_Outline.displayName = "BootstrapOutline";

const Chevron = { Outline: ChevronDown_Outline };

export default Chevron;
