import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import IconButton from "@/components/atoms/buttons/IconButton";
import Chip from "@/components/atoms/Chip";
import {
  Embla,
  EmblaContainer,
  EmblaSlide,
  EmblaWrapper,
} from "@/components/atoms/Embla";
import { ArrowLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowLeft";
import { CloseCircle_Outline } from "@/components/atoms/icons/Essesional/CloseCircle";
import { Like1_Bold } from "@/components/atoms/icons/Support-Like-Question/Like1";
import SearchBox from "@/components/molcules/SearchBox";
import { SheetClose, SheetContent } from "@/components/molcules/Sheet";
import Link from "next/link";

const SearchSheetContent = () => {
  return (
    <SheetContent dir="rtl" className="flex w-full flex-col gap-7 p-0">
      <header className="grid grid-cols-3 border-b border-grey-200 bg-white-50 px-4 py-3">
        <h3 className="col-start-2 justify-self-center text-tittle-1 font-normal text-black-900">
          جستجو
        </h3>
        <SheetClose asChild>
          <IconButton className="col-start-3 justify-self-end">
            <ArrowLeft_Outline className="size-6" />
          </IconButton>
        </SheetClose>
      </header>

      <div className="flex flex-1 flex-col gap-4 overflow-auto px-4">
        <SearchBox className="w-full" />

        <div className="text-tittle-3 font-normal text-black-400">
          جستجو های اخیر :
        </div>

        <Embla direction="rtl" dragFree>
          <EmblaWrapper>
            <EmblaContainer className="select-none [--gap:8px] [--slide-size:fit-content]">
              {Array.from({ length: 5 }).map((_, i) => (
                <EmblaSlide key={i} asChild>
                  <Chip
                    key={i}
                    suffixIcon={<CloseCircle_Outline />}
                    className="border-none bg-white-50 px-2 py-1.5 text-grey-500"
                  >
                    سالن انتظار
                  </Chip>
                </EmblaSlide>
              ))}
            </EmblaContainer>
          </EmblaWrapper>
        </Embla>

        <hr className="h-px border-grey-100" />

        <ul className="flex-1 space-y-4 overflow-auto pb-4">
          {Array.from({ length: 10 }, (_, idx) => (
            <li key={idx}>
              <Link href="#" className="flex items-center gap-4">
                <Avatar className="size-14 rounded-full">
                  <AvatarImage src="https://i.pravatar.cc/300" alt="" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>

                <div className="space-y-2">
                  <h4 className="text text-[16px] font-medium text-black-400">
                    بهرام میرزایی
                  </h4>
                  <span className="text-[12px] font-normal text-grey-500">
                    متخصص مغز و اعصاب
                  </span>
                </div>

                <button className="ms-auto flex items-center gap-2 self-start rounded bg-primary-50 px-2 py-1 text-[12px] font-normal text-primary-500">
                  <Like1_Bold className="size-[18px]" />
                  <span>97%</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SheetContent>
  );
};

export default SearchSheetContent;
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
// import IconButton from "@/components/atoms/buttons/IconButton";
// import Chip from "@/components/atoms/Chip";
// import {
//   Embla,
//   EmblaContainer,
//   EmblaSlide,
//   EmblaWrapper,
// } from "@/components/atoms/Embla";
// import { ArrowLeft_Outline } from "@/components/atoms/icons/Arrow/ArrowLeft";
// import { CloseCircle_Outline } from "@/components/atoms/icons/Essesional/CloseCircle";
// import { Like1_Bold } from "@/components/atoms/icons/Support-Like-Question/Like1";
// import SearchBox from "@/components/molcules/SearchBox";
// import { SheetClose, SheetContent } from "@/components/molcules/Sheet";
// import Link from "next/link";

// const SearchSheetContent = () => {
//   return (
//     <SheetContent dir="rtl" className="flex w-full flex-col gap-7 p-0">
//       <header className="grid grid-cols-3 border-b border-grey-200 bg-white-50 px-4 py-3">
//         <h3 className="col-start-2 justify-self-center text-tittle-1 font-normal text-black-900">
//           جستجو
//         </h3>
//         <SheetClose asChild>
//           <IconButton className="col-start-3 justify-self-end">
//             <ArrowLeft_Outline className="size-6" />
//           </IconButton>
//         </SheetClose>
//       </header>

//       <div className="flex flex-1 flex-col gap-4 px-4">
//         <SearchBox className="w-full" />

//         <div className="space-y-4">
//           <span className="text-tittle-3 font-normal text-black-400">
//             جستجو های اخیر :
//           </span>
//           <Embla direction="rtl" dragFree>
//             <EmblaWrapper>
//               <EmblaContainer className="select-none [--gap:8px] [--slide-size:fit-content]">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <EmblaSlide key={i} asChild>
//                     <Chip
//                       key={i}
//                       suffixIcon={<CloseCircle_Outline />}
//                       className="border-none bg-white-50 px-2 py-1.5 text-grey-500"
//                     >
//                       سالن انتظار
//                     </Chip>
//                   </EmblaSlide>
//                 ))}
//               </EmblaContainer>
//             </EmblaWrapper>
//           </Embla>

//           <hr className="border border-grey-100" />

//           <ul className="space-y-4">
//             {Array.from({ length: 10 }, (_, idx) => (
//               <li key={idx}>
//                 <Link href="#" className="flex items-center gap-4">
//                   <Avatar className="size-14 rounded-full">
//                     <AvatarImage src="https://i.pravatar.cc/300" alt="" />
//                     <AvatarFallback>AT</AvatarFallback>
//                   </Avatar>

//                   <div className="space-y-2">
//                     <h4 className="text text-[16px] font-medium text-black-400">
//                       بهرام میرزایی
//                     </h4>
//                     <span className="text-[12px] font-normal text-grey-500">
//                       متخصص مغز و اعصاب
//                     </span>
//                   </div>

//                   <button className="ms-auto flex items-center gap-2 self-start rounded bg-primary-50 px-2 py-1 text-[12px] font-normal text-primary-500">
//                     <Like1_Bold className="size-[18px]" />
//                     <span>97%</span>
//                   </button>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </SheetContent>
//   );
// };

// export default SearchSheetContent;
