import Button from "@/components/atoms/buttons/Button";
import IconButton from "@/components/atoms/buttons/IconButton";
import { Location_Outline } from "@/components/atoms/icons/Location/Location";
import { SearchNormal_Outline } from "@/components/atoms/icons/Search/SearchNormal";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

const SearchBox = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        "flex max-w-[798px] items-center gap-2 rounded-lg bg-white-50 px-3 py-2 shadow lg:rounded-2xl lg:px-5 lg:py-6",
        props.className,
      )}
    >
      <SearchNormal_Outline className="size-[18px] text-black-100 lg:size-8 lg:text-grey-400" />
      <input
        type="text"
        className="flex-1 border-none text-body-3 font-normal outline-none placeholder:text-black-100 lg:text-body-1 lg:placeholder:text-grey-400"
        placeholder="جستجو پزشک،درمانگر،کلینیک..."
      />
      {/* <span className="ms-2 text-body-3 font-normal text-black-100 lg:text-body-1 lg:text-grey-400">
        جستجو پزشک،درمانگر،کلینیک...
      </span> */}
      <IconButton className="ms-auto rounded-[4px] border border-primary-500 bg-primary-500/10 text-primary-500 lg:hidden">
        <Location_Outline className="size-[18px]" />
      </IconButton>

      <Button
        variant="outline"
        className="ms-auto max-lg:hidden"
        leftIcon={<Location_Outline />}
      >
        انتخاب شهر
      </Button>
    </div>
  );
};

export default SearchBox;
