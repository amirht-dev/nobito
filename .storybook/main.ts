import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [
    {
      from: "../src/assets/fonts",
      to: "src/assets/fonts",
    },
    "..\\public",
  ],
  previewBody(body) {
    return `
    <div id="sheet-root"></div>
    <div id="dialog-root"></div>
    ${body}
    `;
  },
};
export default config;
