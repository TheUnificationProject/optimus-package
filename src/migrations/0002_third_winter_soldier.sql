ALTER TABLE "github_profiles" ALTER COLUMN "username" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "linkedin_profiles" ALTER COLUMN "slug" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "github_profiles" ADD CONSTRAINT "github_profiles_profile_uuid_unique" UNIQUE("profile_uuid");--> statement-breakpoint
ALTER TABLE "linkedin_profiles" ADD CONSTRAINT "linkedin_profiles_profile_uuid_unique" UNIQUE("profile_uuid");