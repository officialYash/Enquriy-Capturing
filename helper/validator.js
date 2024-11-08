import { z } from "zod";

export const enquirySchema = z.object({
    name: z.string().min(2).max(60),
    emailAddress: z.string().email(),
    category: z.enum(['Service Request','FeedBack', 'Complaint']),
    message: z.string().min(3).max(200)
})
.required()
