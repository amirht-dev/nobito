import Button from "@/components/atoms/buttons/Button";
import LogoutButton from "@/components/atoms/buttons/LogoutButton";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../Dialog";

const LogoutDialogContent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="max-lg:text-center">
          خروج از حساب کاربری
        </DialogTitle>
        <DialogClose className="max-lg:hidden" />
      </DialogHeader>

      <DialogDescription>
        با خروج از حساب کاربریتان به اطلاعاتی که وارد کردید دسترسی نخواهید داشت
        و باید مجددا وارد شوید
      </DialogDescription>

      <DialogFooter className="max-lg:grid max-lg:grid-cols-2 max-lg:gap-3">
        <DialogClose asChild>
          <Button variant="outline" color="black" size="md">
            انصراف
          </Button>
        </DialogClose>

        <LogoutButton
          size="md"
          className="max-lg:w-full"
          pendingMessage="در حال خروج"
        >
          خروج از حساب
        </LogoutButton>
      </DialogFooter>
    </DialogContent>
  );
};

export default LogoutDialogContent;
