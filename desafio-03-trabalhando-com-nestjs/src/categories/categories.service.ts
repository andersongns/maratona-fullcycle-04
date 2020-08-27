import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>
        ){}

    async create(description: string): Promise<Categories>{
        return await this.categoriesRepository.save({ description });
    }

    async getCategories(): Promise<Categories[]>{
        return await this.categoriesRepository.find();
    }

    async getCategoriesById(id: number): Promise<Categories>{
        return await this.categoriesRepository.findOne(id);
    }

}
