"use client";

import * as React from "react";
import { Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import clsx from "clsx";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { locale } = useParams();
  const tCommon = useTranslations("common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className={clsx(
          " absolute top-0",
          locale === "ar" ? "-left-5" : "-right-5"
        )}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={clsx(
            "cursor-pointer flex items-center justify-end gap-1.5 border-b-2",
            locale === "ar" ? "justify-row" : "flex-row-reverse"
          )}
        >
          {tCommon("lightMode")}
          <Sun className="mb-1" strokeWidth={1.2} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={clsx(
            "cursor-pointer flex items-center gap-1.5 justify-end",
            locale === "ar" ? "justify-row" : "flex-row-reverse "
          )}
        >
          {tCommon("darkMode")}
          <MoonStar className="mb-1" strokeWidth={1.2} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
