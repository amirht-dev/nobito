import Button from "@/components/atoms/buttons/Button";
import { Field, FieldLabel, Input } from "@/components/atoms/Input";
import Alert from "@/components/molcules/Alert";

const DashboardAccountPage = () => {
  return (
    <>
      <Alert description="با تکمیل اطلاعات هویتی خود می توانید از امکاناتی مثل فروشگاه استفاده کنید" />

      <div className="mt-6 rounded-2xl border border-grey-100 bg-white-100 p-4 lg:p-6">
        <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
          اطلاعات حساب کاربری
        </h2>

        <hr className="mb-6 mt-4 h-px border-grey-100 lg:my-6" />

        <form>
          <div className="grid gap-3 lg:grid-cols-2 lg:gap-6">
            <Field>
              <FieldLabel htmlFor="name">نام</FieldLabel>
              <Input fullWidth id="name" />
            </Field>

            <Field>
              <FieldLabel htmlFor="family-name">نام خانوادگی</FieldLabel>
              <Input fullWidth id="family-name" />
            </Field>

            <Field>
              <FieldLabel htmlFor="national-code">کدملی</FieldLabel>
              <Input fullWidth id="national-code" />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone-number">شماره تلفن</FieldLabel>
              <Input fullWidth id="phone-number" />
            </Field>
          </div>

          <div className="mt-6 flex gap-4 max-lg:flex-col lg:mt-10 lg:items-center lg:justify-between lg:gap-10">
            <p className="text-label-2 font-normal text-primary-500">
              برای تغییر هر بخش از اطلاعات کافی است به روی آن کلیک کنید و پس از
              اعمال تغییرات بر روی دکمه ذخیره کلیک کنید
            </p>

            <Button type="submit" size="md">
              ذخیره تغییرات
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardAccountPage;
