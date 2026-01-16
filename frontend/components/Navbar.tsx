'use client';

import React from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Search, PersonOutline } from '@mui/icons-material';
import { useGetCartQuery } from '@/services/cartApi';

const Navbar: React.FC = () => {
    const { data: cartItems = [] } = useGetCartQuery();
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #eee', bgcolor: 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', textTransform: 'uppercase' }}>Women</Typography>
                    </Link>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', textTransform: 'uppercase' }}>Men</Typography>
                    </Link>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', textTransform: 'uppercase' }}>Kids</Typography>
                    </Link>
                </Box>

                <Link href="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'black', letterSpacing: -1 }}>
                        YOURSNEAKER
                    </Typography>
                </Link>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <IconButton color="inherit">
                        <PersonOutline />
                    </IconButton>
                    <IconButton color="inherit">
                        <Search />
                    </IconButton>
                    <Link href="/cart">
                        <IconButton color="inherit">
                            <Badge badgeContent={cartItemCount} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
