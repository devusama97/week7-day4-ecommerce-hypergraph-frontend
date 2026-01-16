import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get()
    async getCart() {
        return this.cartService.getCart();
    }

    @Post()
    async addToCart(@Body() body: { productId: string; quantity?: number }) {
        return this.cartService.addToCart(body.productId, body.quantity);
    }

    @Patch()
    async updateQuantity(@Body() body: { productId: string; quantity: number }) {
        return this.cartService.updateQuantity(body.productId, body.quantity);
    }

    @Delete()
    async removeFromCart(@Body() body: { productId: string }) {
        return this.cartService.removeFromCart(body.productId);
    }
}
