"use client";

import SubmitButton from "@/components/atoms/buttons/SubmitButton";
import { Input } from "@/components/atoms/Input";
import Logo from "@/components/atoms/Logo";
import { signInAction } from "@/services/actions/authActions";
import Link from "next/link";
import { useActionState } from "react";

const LoginPage = () => {
  const [state, action] = useActionState(signInAction, null);

  console.log(state);

  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-[200px] -translate-y-1/2 bg-repeat bg-pattern-mobile lg:h-[242px] lg:bg-pattern-desktop" />

      <div className="relative mx-4 flex w-full max-w-md flex-col rounded-xl border border-grey-100 bg-white-100 px-4 py-6 lg:rounded-3xl">
        <Logo className="w-[112px] self-center lg:w-[144px]" variant="simple" />
        <h1 className="mt-6 text-center text-tittle-1 font-medium leading-155 text-black-400 lg:text-headline-1">
          ورود/ثبت نام
        </h1>
        <p className="mt-3 text-center text-tittle-3 font-normal text-grey-500 lg:text-tittle-1">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>

        {state && !state.success && (
          <div className="mt-3 rounded-lg border border-error-400 bg-error-50 p-2 text-error-400">
            {state?.error}
          </div>
        )}
        {state && state.success && (
          <div className="mt-3 rounded-lg border border-success-400 bg-success-50 p-2 text-success-400">
            ایمیل خود را برای ورود چک کنید.
          </div>
        )}
        <form action={action} className="mt-12 flex flex-col self-stretch">
          <Input
            fullWidth
            autoFocus
            name="credential"
            placeholder="مثلا ۰۹۱۲۳۴۵۶۷۸۹ یا email@gmail.com"
          />
          <p className="mt-2 text-label-2 font-normal text-primary-500 lg:text-tittle-3">
            لطفا این قسمت را خالی نگذارید
          </p>

          <SubmitButton
            size="lg"
            className="mt-6"
            type="submit"
            pendingMessage="در حال ورود"
          >
            ورود
          </SubmitButton>
        </form>

        <p className="mt-6 text-center text-label-2 font-normal text-grey-500 lg:text-tittle-3">
          ورود شما به معنای پذیرش شرایط و{" "}
          <Link href="#" className="text-primary-500">
            قوانین نوبیتو
          </Link>{" "}
          <Link href="#" className="text-primary-500">
            و حریم خصوصی
          </Link>{" "}
          است
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
