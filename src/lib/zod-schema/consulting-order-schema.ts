import * as z from "zod";
import { useTranslations } from "next-intl";

export const ConsultingOrderSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  city: z.string(),
  address: z.string(),
  date: z.string(),
});

export const useConsultingOrderSchema = () => {
  const t = useTranslations("validationConsulting");

  return z.object({
    fullName: z.string().min(1, { message: t("fullName") }),
    email: z.string().min(1, { message: t("email") }),
    phoneNumber: z.string().min(1, { message: t("phoneNumber") }),
    city: z.string().min(1, { message: t("city") }),
    address: z.string().min(1, { message: t("address") }),
    date: z.string().min(1, { message: t("date") }),
  });
};
