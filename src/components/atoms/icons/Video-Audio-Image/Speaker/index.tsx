import type { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Speaker_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <g
          id="8134631_speaker_advertising_megaphone_loud_marketing_icon 2"
          clipPath="url(#clip0_1322_26106)"
        >
          <g id="Icons">
            <g id="Group">
              <g id="Shape">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9401 5H13.5001L3.6001 1V17L13.5001 13H14.9401C16.133 13 17.1001 11.9255 17.1001 10.6V7.4C17.1001 6.07452 16.133 5 14.9401 5Z"
                  stroke={fillPath}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.6001 6C1.46676 6.25 0.900098 7.25 0.900098 9C0.900098 10.75 1.46676 11.75 3.6001 12V6Z"
                  stroke={fillPath}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M13.5 12V6"
                  stroke={fillPath}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M13.5002 19L14.9402 13"
                  stroke={fillPath}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1322_26106">
            <rect
              width="18"
              height="20"
              fill="white"
              transform="matrix(-1 0 0 1 18 0)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
);
Speaker_Outline.displayName = "Speaker_Outline";

const Speaker = { Outline: Speaker_Outline };

export default Speaker;
