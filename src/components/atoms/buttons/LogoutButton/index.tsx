"use client";

import { logoutAction } from "@/services/actions/authActions";
import { usePathname } from "next/navigation";
import SubmitButton from "../SubmitButton";

const LogoutButton = () => {
  const pathname = usePathname();

  return (
    <form action={logoutAction.bind(null, pathname)}>
      <SubmitButton
        className="max-lg:hidden"
        size="lg"
        pendingMessage="در حال خروج"
      >
        خروج
      </SubmitButton>
    </form>
  );
};

export default LogoutButton;
