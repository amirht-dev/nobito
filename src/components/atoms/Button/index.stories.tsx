import type { Meta, StoryObj } from "@/types/storybook";
import Button from ".";
import { Bootstrap_Outline } from "../icons/Crypto-Company/Bootstrap";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./index.constants";
import type { ButtonProps } from "./index.types";
import { formatStorybookOptions } from "@/utils/helpers";

const meta = {
  component: Button,
  args: {
    children: "نوبیتو",
    size: "md",
    leftIcon: false,
    rightIcon: false,
    variant: "fill",
    color: "primary",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: BUTTON_SIZES,
      table: {
        type: {
          summary: formatStorybookOptions(BUTTON_SIZES),
        },
      },
    },
    leftIcon: {
      control: "boolean",
      mapping: {
        true: <Bootstrap_Outline />,
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    rightIcon: {
      control: "boolean",
      mapping: {
        true: <Bootstrap_Outline />,
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    variant: {
      control: "inline-radio",
      options: BUTTON_VARIANTS,
      table: {
        type: {
          summary: formatStorybookOptions(BUTTON_VARIANTS),
        },
      },
    },
    color: {
      control: "inline-radio",
      options: BUTTON_COLORS,
      table: {
        type: {
          summary: formatStorybookOptions(BUTTON_COLORS),
        },
      },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;

export const Huge = {
  args: {
    size: "xl",
  },
} satisfies Story;

export const LeftIcon = {
  args: {
    leftIcon: <Bootstrap_Outline />,
  },
} satisfies Story;

export const RightIcon = {
  args: {
    rightIcon: <Bootstrap_Outline />,
  },
} satisfies Story;

export const BothIcons = {
  args: {
    leftIcon: <Bootstrap_Outline />,
    rightIcon: <Bootstrap_Outline />,
  },
} satisfies Story;

export const Fill = {
  args: {
    variant: "fill",
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: "outline",
  },
} satisfies Story;

export const Text = {
  args: {
    variant: "text",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const Secondary = {
  args: {
    color: "secondary",
  },
} satisfies Story;

export const Black = {
  args: {
    color: "black",
  },
} satisfies Story;

export const White = {
  args: {
    color: "white",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
