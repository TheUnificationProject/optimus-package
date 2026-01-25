import { AssociatedSkill } from '@/types/skills';
import { projectSchema, projectSkillsSchema } from '@schemas/project.schema';
import { InferSelectModel } from 'drizzle-orm';

export type ProjectSchema = typeof projectSchema;
export type ProjectEntity = InferSelectModel<ProjectSchema>;

export type ProjectSkillsSchema = typeof projectSkillsSchema;
export type ProjectSkillsEntity = InferSelectModel<ProjectSkillsSchema>;

export type ProjectSkill = AssociatedSkill;

export type Project = {
  uuid: ProjectEntity['uuid'];
  profileUuid: ProjectEntity['profileUuid'];
  title: ProjectEntity['title'];
  description: ProjectEntity['description'];
  skills: ProjectSkill[];
  createdAt: ProjectEntity['createdAt'];
  updatedAt: ProjectEntity['updatedAt'];
  deletedAt: ProjectEntity['deletedAt'];
};
