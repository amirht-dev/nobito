import { tv } from "@/lib/tv";
import type { RefHTMLElement } from "@/types/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { DEFAULT_CHIP_ELEMENT } from "./index.constants";
import type { ChipProps } from "./index.types";

const chipVariants = tv(
  {
    slots: {
      container:
        "inline-flex items-center gap-2 text-nowrap font-medium rounded-full border border-grey-400 px-3 py-2 text-body-4 leading-none text-grey-400 lg:text-tittle-2",
      icon: "size-[18px]",
    },
  },
  { twMerge: true },
);

const Chip = forwardRef<RefHTMLElement<typeof DEFAULT_CHIP_ELEMENT>, ChipProps>(
  ({ asChild, className, prefixIcon, suffixIcon, ...props }, ref) => {
    const Comp = asChild ? Slot : DEFAULT_CHIP_ELEMENT;

    const cns = chipVariants();

    return (
      <Comp {...props} ref={ref} className={cns.container({ className })}>
        <Slot className={cns.icon()}>{prefixIcon}</Slot>
        <Slottable>{props.children}</Slottable>
        <Slot className={cns.icon()}>{suffixIcon}</Slot>
      </Comp>
    );
  },
);
Chip.displayName = "Chip";

export default Chip;
