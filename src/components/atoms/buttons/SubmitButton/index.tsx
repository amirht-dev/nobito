import { useFormStatus } from "react-dom";
import type { Merge } from "type-fest";
import Button from "../Button";
import type { ButtonProps } from "../Button/index.types";

const SubmitButton = ({
  pendingMessage,
  disabled,
  children,
  ...props
}: Merge<ButtonProps, { pendingMessage?: string }>) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending || disabled}>
      {pending && pendingMessage ? pendingMessage : children}
    </Button>
  );
};

export default SubmitButton;
