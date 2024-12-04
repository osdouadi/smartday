"use client"

import React from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSettings = () => {
  const { setTheme } = useTheme();
  const tSettigns = useTranslations("dashboard.settings");

  return (
    <Card>
      <CardHeader className="mb-3 md:-mb-5">
        <CardTitle>{tSettigns("changeCurrentMode")}</CardTitle>
        <CardDescription>
          {tSettigns("changeCurrentModeDescription")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-center gap-3">
          <Button
            onClick={() => setTheme("light")}
            variant={"outline"}
            className="min-h-12 gap-2.5"
          >
            {tSettigns("lightMode")}
            <MoonStar className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            onClick={() => setTheme("dark")}
            variant={"outline"}
            className="min-h-12 gap-2.5"
          >
            {tSettigns("darkMode")}
            <Sun className="min-h-12 gap-2.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSettings;
