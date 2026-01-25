import { contactMessageSchema } from '@schemas/contact-message.schema';
import { InferSelectModel } from 'drizzle-orm';

export type ContactMessageSchema = typeof contactMessageSchema;
export type ContactMessageEntity = InferSelectModel<ContactMessageSchema>;
