import * as schema from '@schemas/index';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export type DrizzleClient = ReturnType<typeof drizzle>;

export function createDrizzleClient(pool: Pool): DrizzleClient {
  const client = drizzle(pool, {
    schema,
  });

  return client;
}
