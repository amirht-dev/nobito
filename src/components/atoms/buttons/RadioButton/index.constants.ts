import { createCTX } from "@/utils/clientHelpers";
import type { RadioGroupContextType } from "./index.types";

export const { context: RadioGroupContext, hook: useRadioGroupContext } =
  createCTX<RadioGroupContextType>("RadioGroup", {
    throw: false,
  });
