import * as z from "zod";
import { AppSettingsSchema } from "@/lib/zod-schema/app-settings";

export type AppSettingsData = z.infer<typeof AppSettingsSchema>;
