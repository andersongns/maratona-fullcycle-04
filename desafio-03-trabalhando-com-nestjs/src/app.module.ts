import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TreeRepository } from 'typeorm';
@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, 'database','sqlite.database'),
      autoLoadEntities: true,
      migrations: [ join(__dirname, 'database','migrations','*{.ts,.js}')],
      migrationsRun: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
