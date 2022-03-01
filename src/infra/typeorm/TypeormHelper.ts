import env from '@/main/config/env';
import { readdir } from 'fs/promises';
import path from 'path';
import { Connection, createConnection } from 'typeorm';

export class TypeormHelper {
  private connection?: Connection;
  private static instance?: TypeormHelper;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): TypeormHelper {
    if (!this.instance) {
      this.instance = new TypeormHelper();
    }

    return this.instance;
  }

  async connect(): Promise<void> {
    const migrationsDir = path.join(__dirname, 'migrations');
    const migrations: any[] = [];
    const files = await readdir(migrationsDir, { encoding: 'utf-8' });
    files
      .map(file => `${migrationsDir}/${file}`)
      .forEach(async file => {
        const imports = await import(file);
        migrations.push(imports.default);
      });

    this.connection = await createConnection({
      ...env.db,
      migrations,
      type: 'postgres',
      entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/typeorm/entities/index.{js,ts}`],
    });

    await this.connection.runMigrations();
  }

  async query(query: string): Promise<unknown> {
    return this.connection?.query(query);
  }
}
