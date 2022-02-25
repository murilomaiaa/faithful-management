import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAddress1645738265040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'country',
            type: 'char(2)',
            default: "'BR'",
          },
          {
            name: 'zipcode',
            type: 'char(8)',
          },
          {
            name: 'state',
            type: 'char(2)', // MG, PR, SP...
          },
          {
            name: 'city',
            type: 'varchar(55)',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'varchar(11)',
            default: "'s/n'",
          },
          {
            name: 'complementary',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(_: QueryRunner): Promise<void> {}
}
