"use client";

import { logoutAction } from "@/services/actions/authActions";
import { usePathname } from "next/navigation";
import SubmitButton from "../SubmitButton";
import type { SubmitButtonProps } from "../SubmitButton/index.types";

const LogoutButton = (props: SubmitButtonProps) => {
  const pathname = usePathname();

  return (
    <form action={logoutAction.bind(null, pathname)}>
      <SubmitButton {...props} />
    </form>
  );
};

export default LogoutButton;
