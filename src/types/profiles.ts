import { AssociatedSkill } from '@/types/skills';
import {
  gitHubProfileSchema,
  linkedInProfileSchema,
  profileSchema,
  profileSkillsSchema,
} from '@schemas/profile.schema';
import { InferSelectModel } from 'drizzle-orm';

export type ProfileSchema = typeof profileSchema;
export type ProfileEntity = InferSelectModel<ProfileSchema> & {
  linkedIn: LinkedInProfileEntity;
  gitHub: GitHubProfileEntity;
};

export type LinkedInProfileSchema = typeof linkedInProfileSchema;
export type LinkedInProfileEntity = InferSelectModel<LinkedInProfileSchema>;

export type GitHubProfileSchema = typeof gitHubProfileSchema;
export type GitHubProfileEntity = InferSelectModel<GitHubProfileSchema>;

export type ProfileSkillsSchema = typeof profileSkillsSchema;
export type ProfileSkillsEntity = InferSelectModel<ProfileSkillsSchema>;

export type ProfileSkill = AssociatedSkill;

export type Profile = {
  uuid: ProfileEntity['uuid'];
  firstName: ProfileEntity['firstName'];
  lastName: ProfileEntity['lastName'];
  fullName: `${ProfileEntity['firstName']} ${ProfileEntity['lastName']}`;
  title: ProfileEntity['title'];
  biography: ProfileEntity['biography'];
  location: ProfileEntity['location'];
  contactEmail: ProfileEntity['contactEmail'];
  contactPhoneNumber: ProfileEntity['contactPhoneNumber'];
  age: number | null;
  linkedIn: {
    profileUrl: string | null;
  };
  gitHub: {
    profileUrl: string | null;
  };
  updatedAt: ProfileEntity['updatedAt'];
};
