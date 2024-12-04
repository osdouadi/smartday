import * as z from "zod";
import { useTranslations } from "next-intl";

export const PricingOrderSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  city: z.string(),
  address: z.string(),
  service: z.string(),
});

export const usePricingOrderSchema = () => {
  const t = useTranslations("validationPricing");

  return z.object({
    fullName: z.string().min(1, { message: t("fullName") }),
    email: z.string().min(1, { message: t("email") }),
    phoneNumber: z.string().min(1, { message: t("phoneNumber") }),
    city: z.string().min(1, { message: t("city") }),
    address: z.string().min(1, { message: t("address") }),
    service: z.string().min(1, { message: t("service") }),
  });
};
