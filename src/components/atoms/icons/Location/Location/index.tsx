import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Location_Outline = forwardRef<
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
        d="M11.9989 14.1714C9.86891 14.1714 8.12891 12.4414 8.12891 10.3014C8.12891 8.16141 9.86891 6.44141 11.9989 6.44141C14.1289 6.44141 15.8689 8.17141 15.8689 10.3114C15.8689 12.4514 14.1289 14.1714 11.9989 14.1714ZM11.9989 7.94141C10.6989 7.94141 9.62891 9.00141 9.62891 10.3114C9.62891 11.6214 10.6889 12.6814 11.9989 12.6814C13.3089 12.6814 14.3689 11.6214 14.3689 10.3114C14.3689 9.00141 13.2989 7.94141 11.9989 7.94141Z"
        fill={fillPath}
      />
      <path
        d="M12.0016 22.76C10.5216 22.76 9.03164 22.2 7.87164 21.09C4.92164 18.25 1.66164 13.72 2.89164 8.33C4.00164 3.44 8.27164 1.25 12.0016 1.25C12.0016 1.25 12.0016 1.25 12.0116 1.25C15.7416 1.25 20.0116 3.44 21.1216 8.34C22.3416 13.73 19.0816 18.25 16.1316 21.09C14.9716 22.2 13.4816 22.76 12.0016 22.76ZM12.0016 2.75C9.09164 2.75 5.35164 4.3 4.36164 8.66C3.28164 13.37 6.24164 17.43 8.92164 20C10.6516 21.67 13.3616 21.67 15.0916 20C17.7616 17.43 20.7216 13.37 19.6616 8.66C18.6616 4.3 14.9116 2.75 12.0016 2.75Z"
        fill={fillPath}
      />
    </svg>
  );
});
Location_Outline.displayName = "BootstrapOutline";

export const Location_Bold = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Location_Bold.displayName = "Location_Bold";

const Location = { Outline: Location_Outline, Bold: Location_Bold };

export default Location;
