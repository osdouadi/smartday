import * as z from "zod";
import { useTranslations } from "next-intl";

export const CategorySchema = z.object({
  categoryImage: z.string(),
  title: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  summary: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  description: z.object({
    ar: z.string(),
    en: z.string(),
  }),
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
});

export const useCategorySchema = () => {
  const t = useTranslations("validationCategory");

  return z.object({
    categoryImage: z.string(),
    title: z.object({
      ar: z.string().min(2, { message: t("title.ar") }),
      en: z.string().min(2, { message: t("title.en") }),
    }),
    summary: z.object({
      ar: z.string().min(2, { message: t("summary.ar") }),
      en: z.string().min(2, { message: t("summary.en") }),
    }),
    description: z.object({
      ar: z.string().min(2, { message: t("description.ar") }),
      en: z.string().min(2, { message: t("description.en") }),
    }),
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
  });
};
