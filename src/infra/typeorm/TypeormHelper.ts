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
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      migrations,
      entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/typeorm/entities/index.{js,ts}`],
    });

    await this.connection.runMigrations();
  }

  async query(query: string): Promise<unknown> {
    return this.connection?.query(query);
  }
}
