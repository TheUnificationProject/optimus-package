import dotenv from 'dotenv';
import { Config, defineConfig } from 'drizzle-kit';

dotenv.config();

const SCHEMAS_PATH = './src/schemas/index.ts';
const MIGRATIONS_PATH = './src/migrations';

function assertDatabaseUrl(url: string | undefined): asserts url is string {
  if (typeof url !== 'string') {
    throw new Error('DATABASE_URL is not a string');
  }
}

function createConfig(): Config {
  assertDatabaseUrl(process.env.DATABASE_URL);

  return {
    schema: SCHEMAS_PATH,
    out: MIGRATIONS_PATH,
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL,
      ssl:
        process.env.DATABASE_SSL_MODE === 'true'
          ? { rejectUnauthorized: false }
          : false,
    },
  };
}

export default defineConfig(createConfig());
