import * as z from "zod";
import { useTranslations } from "next-intl";

export const MetadataSchema = z.object({
  homePageMetadata: z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
  }),
  aboutUsPageMetadata: z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
  }),
  pricingPageMetadata: z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
  }),
  contactPageMetadata: z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
  }),
  blogsPageMetadata: z.object({
    title: z.object({
      ar: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ar: z.string(),
      en: z.string(),
    }),
  }),
});

export const useMetadataSchema = () => {
  const t = useTranslations("validationMetadata");

  return z.object({
    homePageMetadata: z.object({
      title: z.object({
        ar: z.string().min(1, { message: t("homePageMetadata.title.ar") }),
        en: z.string().min(1, { message: t("homePageMetadata.title.en") }),
      }),
      description: z.object({
        ar: z
          .string()
          .min(1, { message: t("homePageMetadata.description.ar") }),
        en: z
          .string()
          .min(1, { message: t("homePageMetadata.description.en") }),
      }),
    }),
    aboutUsPageMetadata: z.object({
      title: z.object({
        ar: z.string().min(1, { message: t("aboutUsPageMetadata.title.ar") }),
        en: z.string().min(1, { message: t("aboutUsPageMetadata.title.en") }),
      }),
      description: z.object({
        ar: z
          .string()
          .min(1, { message: t("aboutUsPageMetadata.description.ar") }),
        en: z
          .string()
          .min(1, { message: t("aboutUsPageMetadata.description.en") }),
      }),
    }),
    pricingPageMetadata: z.object({
      title: z.object({
        ar: z.string().min(1, { message: t("pricingPageMetadata.title.ar") }),
        en: z.string().min(1, { message: t("pricingPageMetadata.title.en") }),
      }),
      description: z.object({
        ar: z
          .string()
          .min(1, { message: t("pricingPageMetadata.description.ar") }),
        en: z
          .string()
          .min(1, { message: t("pricingPageMetadata.description.en") }),
      }),
    }),
    contactPageMetadata: z.object({
      title: z.object({
        ar: z.string().min(1, { message: t("contactPageMetadata.title.ar") }),
        en: z.string().min(1, { message: t("contactPageMetadata.title.en") }),
      }),
      description: z.object({
        ar: z
          .string()
          .min(1, { message: t("contactPageMetadata.description.ar") }),
        en: z
          .string()
          .min(1, { message: t("contactPageMetadata.description.en") }),
      }),
    }),
    blogsPageMetadata: z.object({
      title: z.object({
        ar: z.string().min(1, { message: t("blogsPageMetadata.title.ar") }),
        en: z.string().min(1, { message: t("blogsPageMetadata.title.en") }),
      }),
      description: z.object({
        ar: z
          .string()
          .min(1, { message: t("blogsPageMetadata.description.ar") }),
        en: z
          .string()
          .min(1, { message: t("blogsPageMetadata.description.en") }),
      }),
    }),
  });
};
