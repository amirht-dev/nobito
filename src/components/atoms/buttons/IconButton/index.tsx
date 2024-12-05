import type { RefHTMLElement } from "@/types/utils";
import { cn } from "@/utils/helpers";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { DEFAULT_ICON_BUTTON_ELEMENT } from "./index.constants";
import type { IconButtonProps } from "./index.types";

const IconButton = forwardRef<
  RefHTMLElement<typeof DEFAULT_ICON_BUTTON_ELEMENT>,
  IconButtonProps
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_ICON_BUTTON_ELEMENT;
  return <Comp {...props} ref={ref} className={cn("p-2", className)} />;
});
IconButton.displayName = "IconButton";

export default IconButton;
