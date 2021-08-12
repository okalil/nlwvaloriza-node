import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddPasswordReset1628457491348
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'password_reset_token',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'password_reset_expires',
        type: 'timestamp',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password_reset_token');
    await queryRunner.dropColumn('users', 'password_reset_expires');
  }
}
