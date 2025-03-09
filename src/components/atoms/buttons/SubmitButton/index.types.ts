import type { Merge } from "type-fest";
import type { ButtonProps } from "../Button/index.types";

export type SubmitButtonProps = Merge<ButtonProps, { pendingMessage?: string }>;
