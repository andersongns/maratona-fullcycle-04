import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from './categories.entity';
import { CategoriesDto } from './categories.dto';

@Controller('categories')
export class CategoriesController {
    constructor(
        private categoriesService: CategoriesService
    ){}

    @Get()
    async getCategories(): Promise<Categories[]> {
        return this.categoriesService.getCategories();
    }

    @Get(':id')
    async getCategoriesById(@Param() id: number): Promise<Categories>{
        return this.categoriesService.getCategoriesById(id);
    }

    @Post()
    async create(@Body() categoriesDto: CategoriesDto): Promise<Categories> {
        const { description } = categoriesDto;
        return this.categoriesService.create(description);
    }

}
