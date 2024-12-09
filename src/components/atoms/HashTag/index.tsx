import type { RefHTMLElement } from "@/types/utils";
import React, { forwardRef } from "react";
import { DEFAULT_HASHTAG_ELEMENT } from "./index.constants";
import type { HashTagProps } from "./index.types";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils/helpers";

const HashTag = forwardRef<
  RefHTMLElement<typeof DEFAULT_HASHTAG_ELEMENT>,
  HashTagProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : DEFAULT_HASHTAG_ELEMENT;
  return (
    <Comp
      {...props}
      className={cn("rounded-3xl bg-grey-50 px-3 py-0.5", props.className)}
      ref={ref}
    />
  );
});
HashTag.displayName = "HashTag";

export default HashTag;
