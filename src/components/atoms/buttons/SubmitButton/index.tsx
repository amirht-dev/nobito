import { useFormStatus } from "react-dom";
import Button from "../Button";
import type { SubmitButtonProps } from "./index.types";

const SubmitButton = ({
  pendingMessage,
  disabled,
  children,
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" {...props} disabled={pending || disabled}>
      {pending && pendingMessage ? pendingMessage : children}
    </Button>
  );
};

export default SubmitButton;
