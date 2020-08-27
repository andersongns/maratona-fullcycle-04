import {MigrationInterface, QueryRunner} from "typeorm";
import { Categories } from "src/categories/categories.entity";

export class CategoryMigration1598492576724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const categories = []

        for (let index = 0; index < 10; index++) {
            categories.push({description: `Category ${index+1}`})
        }

        queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into('categories')
            .values(categories)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
