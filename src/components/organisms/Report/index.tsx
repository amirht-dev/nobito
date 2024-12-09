import React from "react";

const Report = () => {
  return (
    <section>
      <div
        className="h-6 w-4/5 bg-primary-500"
        style={{ clipPath: "polygon(20px 0px, 100% 0, 100% 24px, 0px 24px)" }}
      />
      <div className="grid grid-cols-2 bg-primary-50">
        <ReportItem label="نوبت دهی روزانه" count={40_000} />
        <ReportItem label="مراکز درمانی" count={15_000} />
        <ReportItem label="پزشک آماده به خدمت" count={30_000} />
        <ReportItem label="درمانگر سیار" count={10_000} />
      </div>
      <div
        className="ms-auto h-6 w-4/5 bg-primary-500"
        style={{
          clipPath:
            "polygon(0px 0px, calc(100% - 20px) 0px, 100% 24px, 0px 24px)",
        }}
      />
    </section>
  );
};

function ReportItem({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex flex-col items-center gap-3 p-8 text-center">
      <span className="text-body-1 font-semibold">{count}+</span>
      <span className="text-body-3 font-normal">{label}</span>
    </div>
  );
}

export default Report;
