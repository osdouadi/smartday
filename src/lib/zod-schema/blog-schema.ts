import * as z from "zod";
import { useTranslations } from "next-intl";

export const BlogSchema = z.object({
  title: z.object({
    ar: z.string().min(2),
    en: z.string().min(2),
  }),
  shortDescription: z.object({
    ar: z.string().min(2),
    en: z.string().min(2),
  }),
  longDescription: z.object({
    ar: z.string().min(2),
    en: z.string().min(2),
  }),
  blogImage: z.string(),
  SEOSettings: z.object({
    pageTitle: z.object({
      ar: z.string().min(2),
      en: z.string().min(2),
    }),
    pageDescription: z.object({
      ar: z.string().min(2),
      en: z.string().min(2),
    }),
  }),
});

export const useBlogSchema = () => {
  const t = useTranslations("validationBlog");

  return z.object({
    title: z.object({
      ar: z.string().min(2, { message: t("title.ar") }),
      en: z.string().min(2, { message: t("title.en") }),
    }),
    shortDescription: z.object({
      ar: z.string().min(2, { message: t("shortDescription.ar") }),
      en: z.string().min(2, { message: t("shortDescription.en") }),
    }),
    longDescription: z.object({
      ar: z.string().min(2, { message: t("longDescription.ar") }),
      en: z.string().min(2, { message: t("longDescription.en") }),
    }),
    blogImage: z.string(),
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
