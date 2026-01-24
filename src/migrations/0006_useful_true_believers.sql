ALTER TABLE "contact_messages" ADD COLUMN "lang" varchar(5);--> statement-breakpoint
CREATE INDEX "email_idx" ON "contact_messages" USING btree ("email");--> statement-breakpoint
CREATE INDEX "phone_number_idx" ON "contact_messages" USING btree ("phone_number");--> statement-breakpoint
CREATE INDEX "created_at_idx" ON "contact_messages" USING btree ("created_at");