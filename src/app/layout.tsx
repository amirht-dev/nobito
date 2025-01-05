import { iranSansX } from "@/lib/fonts";
import "@/styles/globals.css";
import { type PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={iranSansX.variable} lang="fa" dir="rtl">
      <body className="font-iranSansX">
        {children}
        <div id="sheet-root"></div>
        <div id="dialog-root"></div>
      </body>
    </html>
  );
};

export default RootLayout;
