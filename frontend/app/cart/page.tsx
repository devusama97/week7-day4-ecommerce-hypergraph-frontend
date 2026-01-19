'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    IconButton,
    Button,
    Divider,
    CircularProgress
} from '@mui/material';
import { Add, Remove, DeleteOutline } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    useGetCartQuery,
    useUpdateQuantityMutation,
    useRemoveFromCartMutation
} from '@/services/cartApi';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    const { data: cartItems = [], isLoading, isError } = useGetCartQuery();
    const [updateQuantity] = useUpdateQuantityMutation();
    const [removeFromCart] = useRemoveFromCartMutation();

    const handleUpdateQuantity = (productId: string, currentQty: number, delta: number) => {
        updateQuantity({ productId, quantity: currentQty + delta });
    };

    const handleRemove = (productId: string) => {
        removeFromCart({ productId });
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main style={{ flexGrow: 1 }}>
                <Container maxWidth="xl" sx={{ py: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 6 }}>
                        Your Cart
                    </Typography>

                    {isLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                            <CircularProgress color="inherit" />
                        </Box>
                    ) : isError ? (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography color="error">Failed to load cart. Please try again later.</Typography>
                        </Box>
                    ) : cartItems.length === 0 ? (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h6" sx={{ mb: 4 }}>Your cart is empty</Typography>
                            <Link href="/" passHref>
                                <Button variant="contained" color="primary" size="large">
                                    Go Shopping
                                </Button>
                            </Link>
                        </Box>
                    ) : (
                        <Grid container spacing={8}>
                            <Grid size={{ xs: 12, md: 8 }}>
                                {cartItems.map((item) => (
                                    <Box key={item.productId} sx={{ mb: 4 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid size={{ xs: 3 }}>
                                                <Box sx={{ bgcolor: '#f5f5f5', borderRadius: 2, height: 100, position: 'relative' }}>
                                                    <Image
                                                        src={item.image || 'https://placehold.co/100x100/eeeeee/999999?text=Sneaker'}
                                                        alt={item.name}
                                                        fill
                                                        style={{ objectFit: 'contain', padding: '8px' }}
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid size={{ xs: 5 }}>
                                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.name}</Typography>
                                                <Typography variant="body2" color="text.secondary">Item price: ${item.price}</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 3 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleUpdateQuantity(item.productId, item.quantity, -1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Remove fontSize="small" />
                                                    </IconButton>
                                                    <Typography variant="body1" sx={{ fontWeight: 600, minWidth: 20, textAlign: 'center' }}>
                                                        {item.quantity}
                                                    </Typography>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleUpdateQuantity(item.productId, item.quantity, 1)}
                                                    >
                                                        <Add fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            </Grid>
                                            <Grid size={{ xs: 1 }} sx={{ textAlign: 'right' }}>
                                                <IconButton onClick={() => handleRemove(item.productId)} color="error">
                                                    <DeleteOutline />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Divider sx={{ mt: 4 }} />
                                    </Box>
                                ))}
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <Box sx={{ bgcolor: '#f9f9f9', p: 4, borderRadius: 4 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>Summary</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                        <Typography>Subtotal</Typography>
                                        <Typography sx={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                                        <Typography>Shipping</Typography>
                                        <Typography sx={{ fontWeight: 600 }}>Free</Typography>
                                    </Box>
                                    <Divider sx={{ mb: 4 }} />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>Total</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>${subtotal.toFixed(2)}</Typography>
                                    </Box>
                                    <Button variant="contained" color="primary" fullWidth size="large" sx={{ py: 2, borderRadius: 10 }}>
                                        Checkout
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </main>

            <Footer />
        </Box>
    );
}
