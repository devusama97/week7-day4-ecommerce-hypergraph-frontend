'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box, Chip } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useAddToCartMutation } from '@/services/cartApi';

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number | number[];
    category: { name: string };
    description: { text: string };
    sizes: string[];
    image: { url: string }[];
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

    // Robust price handling: handle both scalar number and number array
    const displayPrice = Array.isArray(product.price)
        ? (product.price[0] || 0)
        : (product.price || 0);

    return (
        <Card
            elevation={0}
            sx={{
                bgcolor: '#f5f5f5',
                borderRadius: '24px',
                height: { xs: '400px', sm: '550px' },
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                p: { xs: 2.5, sm: 3 }
            }}
        >
            {/* NIKE Watermark Background */}
            <Typography
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                    fontSize: { xs: '4rem', sm: '7rem' },
                    fontWeight: 900,
                    color: '#e0e0e0',
                    zIndex: 0,
                    userSelect: 'none',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap'
                }}
            >
                NIKE
            </Typography>

            {/* Product Image */}
            <Box sx={{ position: 'relative', height: '60%', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    image={product.image?.[0]?.url || 'https://placehold.co/400x400/eeeeee/999999?text=Sneaker'}
                    alt={product.name}
                    sx={{
                        width: '85%',
                        height: '85%',
                        objectFit: 'contain',
                        transform: 'rotate(-30deg) scale(0.9)',
                        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.1))'
                    }}
                />
            </Box>

            {/* Content & Cart Button Container */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1, position: 'relative' }}>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5, fontSize: { xs: '1.8rem', sm: '2.5rem' }, textTransform: 'capitalize' }}>
                    {product.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', fontWeight: 500, mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                    ${displayPrice}
                </Typography>

                <IconButton
                    onClick={handleAddToCart}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': { bgcolor: '#f0f0f0' },
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        width: { xs: 35, sm: 45 },
                        height: { xs: 35, sm: 45 }
                    }}
                >
                    <ShoppingCart sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem' } }} />
                </IconButton>
            </Box>
        </Card>
    );
};

export default ProductCard;
