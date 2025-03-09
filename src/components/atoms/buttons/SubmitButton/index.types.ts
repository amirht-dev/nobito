import type { ComponentPropsWithoutRef } from "react";
import type { Merge } from "type-fest";
import type { ButtonProps } from "../Button/index.types";

export type SubmitButtonProps = Merge<
  ButtonProps,
  { pendingMessage?: string; formProps?: ComponentPropsWithoutRef<"form"> }
>;
