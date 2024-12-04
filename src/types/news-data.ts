import { NewsSchema } from "@/lib/zod-schema/news-schema";
import * as z from "zod";

export type NewsData = z.infer<typeof NewsSchema>;
