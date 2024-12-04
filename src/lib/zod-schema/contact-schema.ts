import * as z from "zod";
import { useTranslations } from "next-intl";

export const ContactSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  letterTitle: z.string(),
  letterSubject: z.string(),
});

export const useContactSchema = () => {
  const t = useTranslations("validationContact");

  return z.object({
    fullName: z.string().min(1, { message: t("fullName") }),
    email: z.string().min(1, { message: t("email") }),
    phoneNumber: z.string().min(1, { message: t("phoneNumber") }),
    letterTitle: z.string().min(1, { message: t("letterTitle") }),
    letterSubject: z.string().min(1, { message: t("letterSubject") }),
  });
};
