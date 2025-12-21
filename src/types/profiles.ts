import { SkillEntity } from '@/index';
import {
  gitHubProfileSchema,
  linkedInProfileSchema,
  profileSchema,
  profileSkillsSchema,
} from '@schemas/profile.schema';
import { InferSelectModel } from 'drizzle-orm';

export type ProfileEntity = InferSelectModel<typeof profileSchema> & {
  linkedIn?: LinkedInProfileEntity;
  gitHub?: GitHubProfileEntity;
};

export type LinkedInProfileEntity = InferSelectModel<
  typeof linkedInProfileSchema
>;
export type GitHubProfileEntity = InferSelectModel<typeof gitHubProfileSchema>;
export type ProfileSkillsEntity = InferSelectModel<typeof profileSkillsSchema>;

export type ProfileSkill = {
  uuid: SkillEntity['uuid'];
  label: SkillEntity['label'];
  iconUrl: SkillEntity['iconUrl'];
  associatedAt: ProfileSkillsEntity['createdAt'];
};

export type Profile = {
  uuid: ProfileEntity['uuid'];
  firstName: ProfileEntity['firstName'];
  lastName: ProfileEntity['lastName'];
  fullName: `${ProfileEntity['firstName']} ${ProfileEntity['lastName']}`;
  title: ProfileEntity['title'];
  biography: ProfileEntity['biography'];
  age: number | null;
  linkedIn?: {
    profileUrl: string;
  };
  gitHub?: {
    profileUrl: string;
  };
  updatedAt: ProfileEntity['updatedAt'];
};
