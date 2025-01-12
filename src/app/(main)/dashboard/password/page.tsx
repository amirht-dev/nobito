import Button from "@/components/atoms/buttons/Button";
import { Field, FieldLabel, Input } from "@/components/atoms/Input";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export default function DashboardMessagesPage() {
  const passwordStrengthScore = 0;
  return (
    <div className="lg:rounded-2xl lg:border lg:border-grey-100 lg:bg-white-100 lg:p-6">
      <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
        رمز عبور
      </h2>

      <hr className="mt-4 h-px border-grey-100 lg:mt-6" />

      <p className="mt-6 text-body-2 font-normal text-black-400">
        رمز عبور شما باید حداقل 8 حرف باشد.
      </p>

      <form className="mt-6 flex flex-col">
        <div>
          <Field id="new-password" required>
            <FieldLabel>رمز عبور جدید</FieldLabel>
            <Input
              type="password"
              containerProps={{ className: "bg-white-100" }}
            />
          </Field>

          <div className="mt-6 flex items-center gap-3 lg:mt-8">
            {Array.from({ length: 4 }, (_, idx) => {
              const active = idx < passwordStrengthScore;
              return (
                <div
                  className={clsx(
                    "h-1.5 flex-1 rounded-full",
                    active ? "bg-success-500" : "bg-grey-100",
                  )}
                  key={idx}
                />
              );
            })}
          </div>

          <ul className="mt-6 space-y-4 lg:mt-8">
            <PasswordCondition checked={false}>
              رمز عبور شما باید حداقل 8 حرف باشد.
            </PasswordCondition>

            <PasswordCondition checked={false}>حداقل 8 حرف</PasswordCondition>
            <PasswordCondition checked={false}>
              شامل علامت (!@#$%^&*)
            </PasswordCondition>
            <PasswordCondition checked={false}>
              شامل یک حرف بزرگ و کوچک
            </PasswordCondition>
          </ul>
        </div>

        <Field id="confirm-new-password" className="mt-6" required>
          <FieldLabel>تکرار رمز عبور جدید</FieldLabel>
          <Input
            type="password"
            containerProps={{ className: "bg-white-100" }}
          />
        </Field>

        <Button size="md" className="ms-auto mt-6 px-8 lg:mt-10" type="submit">
          تغییر رمز عبور
        </Button>
      </form>
    </div>
  );
}

function PasswordCondition({
  checked = false,
  children,
}: PropsWithChildren<{ checked?: boolean }>) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          "size-1.5 rounded-full",
          checked ? "bg-success-500" : "bg-error-500",
        )}
      />
      <p className="flex-1 text-tittle-3 font-normal text-grey-400">
        {children}
      </p>
    </div>
  );
}
