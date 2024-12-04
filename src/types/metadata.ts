import * as z from "zod";
import { MetadataSchema } from "@/lib/zod-schema/meta-data";

export type MetaData = z.infer<typeof MetadataSchema>;
