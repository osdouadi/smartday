import { PricingOrderSchema } from "@/lib/zod-schema/pricing-order-schema";
import * as z from "zod";

export type PricingOrderData = z.infer<typeof PricingOrderSchema>;
