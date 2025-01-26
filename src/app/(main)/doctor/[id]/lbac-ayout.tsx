// import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
// import {
//   CallCalling_Bold,
//   CallCalling_Outline,
// } from "@/components/atoms/icons/Call/CallCalling";
// import {
//   MonitorMobile_Bold,
//   MonitorMobile_Outline,
// } from "@/components/atoms/icons/Camputer-Devices-Electronic/MonitorMobile";
// import {
//   Messages_Bold,
//   Messages_Outline,
// } from "@/components/atoms/icons/Emails-Messages/Messages";
// import {
//   Frame_Bold,
//   Frame_Outline,
// } from "@/components/atoms/icons/Users/Frame";
// import Rating from "@/components/atoms/Rating";
// import { Tabs, TabsList, TabsTrigger } from "@/components/atoms/Tabs";
// import clsx from "clsx";
// import { type PropsWithChildren } from "react";

// const visitTypes = [
//   {
//     label: "تلفنی",
//     type: "by phone",
//     icon: {
//       active: CallCalling_Bold,
//       inactive: CallCalling_Outline,
//     },
//   },
//   {
//     label: "حضوری",
//     type: "in person",
//     icon: {
//       active: Frame_Bold,
//       inactive: Frame_Outline,
//     },
//   },
//   {
//     label: "آنلاین",
//     type: "online",
//     icon: {
//       active: MonitorMobile_Bold,
//       inactive: MonitorMobile_Outline,
//     },
//   },
//   {
//     label: "متنی",
//     type: "textual",
//     icon: {
//       active: Messages_Bold,
//       inactive: Messages_Outline,
//     },
//   },
// ] as const;

// type VisitType = (typeof visitTypes)[number]["type"];

// export default function DoctorProfileLayout({ children }: PropsWithChildren) {
//   return (
//     <>
//       <div className="container flex flex-col items-center gap-4">
//         <Avatar className="size-[1em] border border-grey-400 bg-transparent p-2 text-[128px]">
//           <AvatarImage
//             src="https://i.pravatar.cc/300"
//             className="rounded-full"
//           />
//           <AvatarFallback className="bg-grey-200">BM</AvatarFallback>
//         </Avatar>

//         <div>
//           <span className="text-body-1 font-medium text-black-400">
//             بهرام میرزایی
//           </span>{" "}
//           <span className="text-body-3 font-normal text-grey-500">
//             (متخصص مغز و اعصاب)
//           </span>
//         </div>

//         <span className="text-body-2 font-medium text-black-400">
//           کد نظام پزشکی : 50558
//         </span>

//         <span className="text-body-1 font-normal text-grey-500">تهران</span>

//         <Rating value={2} />
//       </div>

//       <Tabs
//         defaultValue={"in person" satisfies VisitType}
//         className="container space-y-6 rounded-2xl border border-grey-200 px-4 py-6"
//       >
//         <h3 className="text-center text-headline-3 font-medium text-black-400">
//           ملاقات با پزشک
//         </h3>

//         <TabsList
//           className="flex items-stretch justify-between gap-4 border-none"
//           dir="rtl"
//         >
//           {visitTypes.map(({ type, icon, label }) => (
//             <TabsTrigger
//               value={type}
//               className={clsx(
//                 "group flex flex-1 flex-col gap-3 border-none disabled:cursor-not-allowed",
//               )}
//             >
//               <div
//                 className={clsx(
//                   "flex aspect-square items-center justify-center rounded-lg border border-grey-400 p-3 text-grey-400 transition-all",
//                   "group-data-[state=active]:border-primary-500 group-data-[state=active]:bg-primary-500 group-data-[state=active]:text-white-100",
//                 )}
//               >
//                 <icon.inactive className="h-full max-h-10 w-full max-w-10 group-data-[state=active]:hidden" />
//                 <icon.active className="h-full max-h-10 w-full max-w-10 group-data-[state=inactive]:hidden" />
//               </div>
//               <span className="text-body-2 text-grey-400 group-data-[state=active]:text-primary-500">
//                 {label}
//               </span>
//             </TabsTrigger>
//           ))}
//         </TabsList>
//       </Tabs>

//       {children}

//       <div className="text-center">
//         <h3 className="text-headline-3 font-medium text-black-400">
//           درباره پزشک
//         </h3>
//       </div>
//     </>
//   );
// }
