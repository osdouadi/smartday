"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useExtractLocaleFromPath } from "@/hooks/useExtractLocaleFromPath";
import Image from "next/image";

const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useExtractLocaleFromPath();
  const onSelectChange = (value: string) => {
    const segments = pathname.split("/");
    segments[1] = value;
    const newPathname = segments.join("/");
    router.replace(newPathname);
  };

  return (
    <div>
      <Select
        onValueChange={onSelectChange}
        defaultValue={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <SelectTrigger className="w-[145px] rtl:!w-[130px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="z-[99999999]">
          <SelectGroup>
            <SelectItem value="ar">
              <span className="flex items-center gap-1.5">
                <Image
                  src={"/assets/sa-flag.svg"}
                  alt="arabic"
                  width={25}
                  height={25}
                  className="mb-[1px]"
                />
                العربية
              </span>
            </SelectItem>
            <SelectItem value="en">
              <span className="flex items-center gap-1.5">
                <Image
                  src={"/assets/gb-flag.svg"}
                  alt="english"
                  width={25}
                  height={25}
                  className="mb-[1px]"
                />
                English
              </span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LangSwitcher;
