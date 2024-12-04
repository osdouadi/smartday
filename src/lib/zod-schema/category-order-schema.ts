import * as z from "zod";
import { useTranslations } from "next-intl";

export const CategoryOrderSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  city: z.string(),
  address: z.string(),
  categoryId: z.string(),
  additionalNotes: z.string(),
});

export const useCategoryOrderSchema = () => {
  const t = useTranslations("validationServiceOrder");

  return z.object({
    fullName: z.string().min(1, { message: t("fullName") }),
    email: z.string().min(1, { message: t("email") }),
    phoneNumber: z.string().min(1, { message: t("phoneNumber") }),
    city: z.string().min(1, { message: t("city") }),
    address: z.string().min(1, { message: t("address") }),
    categoryId: z.string().min(1, { message: t("categoryId") }),
    additionalNotes: z.string().min(1, { message: t("additionalNotes") }),
  });
};
