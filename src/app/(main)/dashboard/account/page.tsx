import Alert from "@/components/molcules/Alert";
import AccountForm from "./AccountForm";

const DashboardAccountPage = () => {
  return (
    <>
      <Alert description="با تکمیل اطلاعات هویتی خود می توانید از امکاناتی مثل فروشگاه استفاده کنید" />

      <div className="mt-6 rounded-2xl border border-grey-100 bg-white-100 p-4 lg:p-6">
        <h2 className="text-body-1 font-medium text-black-400 lg:text-tittle-1">
          اطلاعات حساب کاربری
        </h2>

        <hr className="mb-6 mt-4 h-px border-grey-100 lg:my-6" />

        <AccountForm />
      </div>
    </>
  );
};

export default DashboardAccountPage;
