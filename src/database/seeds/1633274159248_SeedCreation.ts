import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCreation_1633274159248 implements MigrationInterface {
  name = 'SeedCreation_1633274159248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO tags (name)
                              VALUES ('dragons'),
                                     ('coffee'),
                                     ('nestjs')`);
    await queryRunner.query(`INSERT INTO users (username, email, password)
                              VALUES ('unique5',
                                      'unique5@gmail.com',
                                      '$2b$10$jpLITppNq7NUs467a89igO.EGUNeby05KJ0I5C74pjHmuGolQxhHC')`);

    await queryRunner.query(`INSERT INTO articles (slug, title, description, body, "tagList", "authorId")
                              VALUES ('first-article',
                                      'First Article',
                                      'First Article description', 'First article body', 'coffee, dragons, nestjs',
                                      1)`);

    await queryRunner.query(`INSERT INTO articles (slug, title, description, body, "tagList", "authorId")
                              VALUES ('second-article',
                                      'Second Article',
                                      'Second Article description', 'Second article body', 'coffee,dragons,nestjs',
                                      1)`);
  }

  public async down(): Promise<void> {}
}
