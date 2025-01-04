import type { RefHTMLElement } from "@/types/utils";
import { cn } from "@/utils/helpers";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { DEFAULT_CHIP_ELEMENT } from "./index.constants";
import type { ChipProps } from "./index.types";

const Chip = forwardRef<RefHTMLElement<typeof DEFAULT_CHIP_ELEMENT>, ChipProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : DEFAULT_CHIP_ELEMENT;

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-grey-400 px-3 py-2 leading-none text-grey-400",
          props.className,
        )}
      >
        {props.prefixIcon}
        <Slottable>{props.children}</Slottable>
        {props.suffixIcon}
      </Comp>
    );
  },
);
Chip.displayName = "Chip";

export default Chip;
