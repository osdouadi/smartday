import * as z from "zod";
import { BlogSchema } from "@/lib/zod-schema/blog-schema";

export type BlogData = z.infer<typeof BlogSchema>;
