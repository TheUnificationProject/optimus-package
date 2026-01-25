import { skillSchema } from '@schemas/skill.schema';
import { InferSelectModel } from 'drizzle-orm';

export type SkillSchema = typeof skillSchema;
export type SkillEntity = InferSelectModel<SkillSchema>;

export type Skill = {
  slug: SkillEntity['slug'];
  label: SkillEntity['label'];
  iconUrl: SkillEntity['iconUrl'];
  createdAt: SkillEntity['createdAt'];
  updatedAt: SkillEntity['updatedAt'];
  deletedAt: SkillEntity['deletedAt'];
};

export type AssociatedSkill<TData = unknown> = {
  slug: SkillEntity['slug'];
  label: SkillEntity['label'];
  iconUrl: SkillEntity['iconUrl'];
  associatedAt: Date;
} & TData;
