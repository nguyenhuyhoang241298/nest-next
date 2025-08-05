import { neon } from '@neondatabase/serverless';
import { Global, Module } from '@nestjs/common';
import { config } from 'dotenv';

config({
  path: ['.env', '.env.production', '.env.local'],
});

const sql = neon(process.env.DATABASE_URL || '');

const dbProvider = {
  provide: 'POSTGRES_POOL',
  useValue: sql,
};

@Global()
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
