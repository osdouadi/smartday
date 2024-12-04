import { CategoryOrderSchema } from "@/lib/zod-schema/category-order-schema";
import * as z from "zod";

export type OrderData = z.infer<typeof CategoryOrderSchema>;
