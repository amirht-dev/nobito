import QueryProvider from "@/components/utils/QueryProvider";
import { iranSansX } from "@/lib/fonts";
import "@/styles/globals.css";
import { type PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={iranSansX.variable} lang="fa" dir="rtl">
      <body className="bg-[#f5f5f5] font-iranSansX">
        <QueryProvider>
          {children}
          <div id="sheet-root"></div>
          <div id="dialog-root"></div>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
