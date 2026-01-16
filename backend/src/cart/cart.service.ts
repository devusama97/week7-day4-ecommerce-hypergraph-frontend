import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

@Injectable()
export class CartService {
    private cart: Map<string, CartItem> = new Map();

    constructor(private readonly productsService: ProductsService) { }

    async getCart() {
        return Array.from(this.cart.values());
    }

    async addToCart(productId: string, quantity: number = 1) {
        if (this.cart.has(productId)) {
            const item = this.cart.get(productId);
            if (item) {
                item.quantity += quantity;
                this.cart.set(productId, item);
            }
        } else {
            const product = await this.productsService.getProductById(productId);
            if (!product) {
                throw new NotFoundException('Product not found');
            }
            this.cart.set(productId, {
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity,
                image: product.image?.url,
            });
        }
        return this.getCart();
    }

    async updateQuantity(productId: string, quantity: number) {
        if (!this.cart.has(productId)) {
            throw new NotFoundException('Item not in cart');
        }
        if (quantity <= 0) {
            this.cart.delete(productId);
        } else {
            const item = this.cart.get(productId);
            if (item) {
                item.quantity = quantity;
                this.cart.set(productId, item);
            }
        }
        return this.getCart();
    }

    async removeFromCart(productId: string) {
        this.cart.delete(productId);
        return this.getCart();
    }

    async clearCart() {
        this.cart.clear();
        return this.getCart();
    }
}
