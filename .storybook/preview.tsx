import QueryProvider from "@/components/utils/QueryProvider";
import { iranSansX } from "../src/lib/fonts";
import "../src/styles/globals.css";
import type { Preview } from "../src/types/storybook/index";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
    },
    viewport: {
      defaultViewport: "mobile2",
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => <QueryProvider>{Story()}</QueryProvider>,
    (Story) => (
      <div dir="rtl" className={`${iranSansX.variable} font-iranSansX`}>
        {Story()}
      </div>
    ),
  ],
};

export default preview;
