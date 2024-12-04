import * as z from "zod";

export const AppSettingsSchema = z.object({
  appName: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  appDescription: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  slogan: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  logo: z.string(),
  font: z.string(),
  theme: z.string(),
});

export const AppLogoSchema = z.object({
  logo: z.string(),
});

export const AppNameAndDescriptionAndSloganSchema = z.object({
  appName: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  appDescription: z.object({
    ar: z.string(),
    en: z.string(),
  }),
  slogan: z.object({
    ar: z.string(),
    en: z.string(),
  }),
});


export type AppLogoSchemaType = z.infer<typeof AppLogoSchema>;
export type AppNameAndDescriptionAndSloganSchemaType = z.infer<
  typeof AppNameAndDescriptionAndSloganSchema
>;


