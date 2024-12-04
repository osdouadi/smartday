import * as z from "zod";
import { useTranslations } from "next-intl";

export const ServiceSchema = z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    category: z.string(),
    SEOSettings: z.object({
      pageTitle: z.object({
        ar: z.string(),
        en: z.string(),
      }),
      pageDescription: z.object({
        ar: z.string(),
        en: z.string(),
      }),
    }),
    serviceBanner: z.string(),
  });
  
export const useServiceSchema = () => {
  const t = useTranslations("validationService");

  return z.object({
    title: z.object({
      ar: z.string().min(2, { message: t("title.ar") }),
      en: z.string().min(2, { message: t("title.en") }),
    }),
    description: z.object({
      ar: z.string().min(2, { message: t("description.ar") }),
      en: z.string().min(2, { message: t("description.en") }),
    }),
    category: z.string().min(1, { message: t("category") }),
    SEOSettings: z.object({
      pageTitle: z.object({
        ar: z.string().min(2, { message: t("SEOSettings.pageTitle.ar") }),
        en: z.string().min(2, { message: t("SEOSettings.pageTitle.en") }),
      }),
      pageDescription: z.object({
        ar: z.string().min(2, { message: t("SEOSettings.pageDescription.ar") }),
        en: z.string().min(2, { message: t("SEOSettings.pageDescription.en") }),
      }),
    }),
    serviceBanner: z.string().min(1, { message: t("serviceBanner") }),
  });
};
