import { createCTX } from "@/utils/clientHelpers";
import type { ElementType } from "react";
import type { EmblaContextType } from "./index.types";

export const DEFAULT_EMBLA_WRAPPER_ELEMENT = "div" satisfies ElementType;

export const DEFAULT_EMBLA_CONTAINER_ELEMENT = "div" satisfies ElementType;

export const DEFAULT_EMBLA_SLIDE_ELEMENT = "div" satisfies ElementType;

export const DEFAULT_EMBLA_BUTTON_ELEMENT = "button" satisfies ElementType;

export const DEFAULT_EMBLA_NAVIGATION_ELEMENT = "div" satisfies ElementType;

export const { context: EmblaContext, hook: useEmblaContext } =
  createCTX<EmblaContextType>("Embla");
