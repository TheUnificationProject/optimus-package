import { AssociatedSkill } from '@/types/skills';
import {
  experienceSchema,
  experienceSkillsSchema,
} from '@schemas/experience.schema';
import { InferSelectModel } from 'drizzle-orm';

export type ExperienceSchema = typeof experienceSchema;
export type ExperienceEntity = InferSelectModel<ExperienceSchema>;

export type ExperienceSkillsSchema = typeof experienceSkillsSchema;
export type ExperienceSkillsEntity = InferSelectModel<ExperienceSkillsSchema>;

export type ExperienceSkill = AssociatedSkill;

export type Experience = {
  uuid: ExperienceEntity['uuid'];
  profileUuid: ExperienceEntity['profileUuid'];
  title: ExperienceEntity['title'];
  description: ExperienceEntity['description'];
  images: string[];
  startDate: ExperienceEntity['startDate'];
  endDate: ExperienceEntity['endDate'];
  skills: ExperienceSkill[];
  createdAt: ExperienceEntity['createdAt'];
  updatedAt: ExperienceEntity['updatedAt'];
  deletedAt: ExperienceEntity['deletedAt'];
};
