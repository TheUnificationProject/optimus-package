import { skillSchema } from '@schemas/skill.schema';
import { InferSelectModel } from 'drizzle-orm';

export type SkillSchema = typeof skillSchema;
export type SkillEntity = InferSelectModel<SkillSchema>;

export type SkillCategory = SkillEntity['category'];

export type Skill = {
  slug: SkillEntity['slug'];
  label: SkillEntity['label'];
  iconUrl: SkillEntity['iconUrl'];
  category: SkillCategory;
  createdAt: SkillEntity['createdAt'];
  updatedAt: SkillEntity['updatedAt'];
  deletedAt: SkillEntity['deletedAt'];
};

export type AssociatedSkill<TData = unknown> = Omit<
  Skill,
  'createdAt' | 'updatedAt' | 'deletedAt'
> & {
  associatedAt: Date;
} & TData;
