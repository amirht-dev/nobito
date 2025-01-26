import {
  extendTailwindMerge,
  type DefaultClassGroupIds,
  type DefaultThemeGroupIds,
} from "tailwind-merge";

export const twMergeConfig: Parameters<
  typeof extendTailwindMerge<DefaultClassGroupIds, DefaultThemeGroupIds>
>[0] = {
  override: {
    theme: {
      colors: [
        {
          primary: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "900",
          ],
        },
        {
          secondary: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "900",
          ],
        },
        {
          accent: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "900",
          ],
        },
        {
          black: ["50", "100", "200", "300", "400", "500", "600", "700", "900"],
        },
        {
          grey: ["50", "100", "200", "300", "400", "500", "600", "700", "900"],
        },
        {
          white: ["50", "100", "200", "300", "400", "500", "600", "700", "900"],
        },
        {
          warning: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "900",
          ],
        },
        {
          success: [
            "50",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "900",
          ],
        },
        {
          error: ["50", "100", "200", "300", "400", "500", "600", "700", "900"],
        },
        "transparent",
      ],
    },
    classGroups: {
      "font-size": [
        {
          text: [
            { display: ["1", "2", "3"] },
            { headline: ["1", "2", "3"] },
            { tittle: ["1", "2", "3"] },
            { label: ["1", "2", "3"] },
            { body: ["1", "2", "3", "4", "5"] },
          ],
        },
      ],
      "font-family": ["font-iranSansX"],
      "bg-image": [
        { bg: [{ pattern: ["", "mobile", "desktop"] }, "pattern2"] },
      ],
    },
  },
  extend: {
    classGroups: {
      leading: [{ leading: ["144", "155"] }],
      animate: [{ animate: [{ accordion: ["down", "up"] }] }],
    },
  },
};

export const twMerge = extendTailwindMerge(twMergeConfig);
