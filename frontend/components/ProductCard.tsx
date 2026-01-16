'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useAddToCartMutation } from '@/services/cartApi';

interface Product {
    id: string;
    name: string;
    price: number;
    image?: { url: string };
    isNew?: boolean;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [addToCart] = useAddToCartMutation();

    const handleAddToCart = () => {
        addToCart({ productId: product.id, quantity: 1 });
    };

    return (
        <Card
            elevation={0}
            sx={{
                bgcolor: '#f9f9f9',
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                    bgcolor: '#f0f0f0',
                }
            }}
        >
            {/* NEW Badge */}
            {product.isNew && (
                <Chip
                    label="NEW"
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: 'white',
                        color: 'red',
                        fontWeight: 800,
                        fontSize: '0.65rem',
                        zIndex: 1,
                        height: 20
                    }}
                />
            )}

            <Box sx={{ position: 'relative', pt: '100%' }}>
                <CardMedia
                    component="img"
                    image={product.image?.url || 'https://placehold.co/400x400/eeeeee/999999?text=Sneaker'}
                    alt={product.name}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        p: 2
                    }}
                />
                <IconButton
                    onClick={handleAddToCart}
                    sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#eee' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <Add />
                </IconButton>
            </Box>
            <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
