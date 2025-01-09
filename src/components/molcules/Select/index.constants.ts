import { createCTX } from "@/utils/clientHelpers";
import type {
  SelectContextType,
  SelectOptionsListAsyncContextType,
} from "./index.types";

export const { context: SelectContext, hook: useSelectContext } =
  createCTX<SelectContextType>("Select");

export const {
  hook: useSelectOptionsListAsyncContext,
  context: SelectOptionsListAsyncContext,
} = createCTX<SelectOptionsListAsyncContextType>("SelectOptionsListAsync");
