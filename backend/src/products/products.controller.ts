import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async getAll() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return this.productsService.getProductById(id);
    }
}
