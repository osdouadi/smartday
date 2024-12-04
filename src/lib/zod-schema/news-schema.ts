import * as z from "zod";
import { useTranslations } from "next-intl";

export const NewsSchema = z.object({
  newsAR: z.string(),
  newsEN: z.string(),
});

export const useNewsSchema = () => {
  const t = useTranslations("validationNews");

  return z.object({
    newsAR: z.string().min(1, { message: t("newsAR") }),
    newsEN: z.string().min(1, { message: t("newsEN") }),
  });
};
