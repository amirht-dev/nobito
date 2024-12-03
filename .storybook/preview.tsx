import type { Preview } from "@storybook/react";
import React from "react";
import { iranSansX } from "../src/lib/fonts";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={`${iranSansX.variable} font-iranSansX`}>{Story()}</div>
    ),
  ],
};

export default preview;
