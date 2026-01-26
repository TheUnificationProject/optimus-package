import { pgEnum, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const SLUG_MIN_LENGTH = 4;
export const SLUG_MAX_LENGTH = 64;

export const LABEL_MIN_LENGTH = 4;
export const LABEL_MAX_LENGTH = 64;

export const CATEGORIES = [
  'language',
  'framework',
  'library',
  'database',
  'tool',
  'cloud',
  'devops',
  'testing',
  'architecture',
  'methodology',
  'softskill',
  'other',
] as const;

export const categoryEnum = pgEnum('category', CATEGORIES);

export const skillSchema = pgTable('skills', {
  slug: varchar('slug', { length: SLUG_MAX_LENGTH }).primaryKey(),

  label: varchar('label', { length: LABEL_MAX_LENGTH }).notNull(),
  iconUrl: text('icon_url'),
  category: categoryEnum('category').notNull(),

  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
});
