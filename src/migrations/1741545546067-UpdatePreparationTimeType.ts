import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePreparationTimeType1741545546067 implements MigrationInterface {
    name = 'UpdatePreparationTimeType1741545546067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD "recipe_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_steps" ADD "recipe_id" integer`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "preparation_time"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "preparation_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "FK_aefbae9e2b77c3f192aff3bce2d" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes_steps" ADD CONSTRAINT "FK_cf6668ed3111a1ab98149b99534" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_steps" DROP CONSTRAINT "FK_cf6668ed3111a1ab98149b99534"`);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP CONSTRAINT "FK_aefbae9e2b77c3f192aff3bce2d"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "preparation_time"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "preparation_time" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_steps" DROP COLUMN "recipe_id"`);
        await queryRunner.query(`ALTER TABLE "recipes_ingredients" DROP COLUMN "recipe_id"`);
    }

}
