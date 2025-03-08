"use client";

import { logoutAction } from "@/services/actions/authActions";
import Button from "../Button";
import { usePathname } from "next/navigation";

const LogoutButton = () => {
  const pathname = usePathname();

  return (
    <form action={logoutAction.bind(null, pathname)}>
      <Button className="max-lg:hidden" size="lg" type="submit">
        خروج
      </Button>
    </form>
  );
};

export default LogoutButton;
