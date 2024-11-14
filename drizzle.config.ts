import { env } from '@/lib/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  dialect: 'postgresql',
  out: './drizzle',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
});
