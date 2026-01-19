'use client';

import React from 'react';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, IconButton, Badge, Container, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { ShoppingCart, Search, PersonOutline, Menu as MenuIcon } from '@mui/icons-material';
import { useGetCartQuery } from '@/services/cartApi';

const Navbar: React.FC = () => {
    const { data: cartItems = [] } = useGetCartQuery();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: 250, pt: 2 }} onClick={handleDrawerToggle}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Search /></ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><PersonOutline /></ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                {['Women', 'Men', 'Kids'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                            <ListItemButton>
                                <ListItemText primary={text.toUpperCase()} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #eee', bgcolor: 'white' }}>
            <Toolbar disableGutters>
                <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
                    {/* Mobile: Hamburger Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Desktop Content: Left Links */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                        {['Women', 'Men', 'Kids'].map((item) => (
                            <Link key={item} href="/" style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        pb: '4px',
                                        borderBottom: '2px solid transparent',
                                        transition: 'all 0.2s ease-in-out',
                                        '&:hover': {
                                            borderBottom: '2px solid black'
                                        }
                                    }}
                                >
                                    {item}
                                </Typography>
                            </Link>
                        ))}
                    </Box>

                    {/* Logo: Centered on both, smaller on mobile */}
                    <Link href="/" style={{ textDecoration: 'none', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'black', letterSpacing: -1, fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 800 }}>
                            <Box component="span" sx={{ fontWeight: 300, color: '#757575' }}>YOUR</Box>
                            SNEAKER
                        </Typography>
                    </Link>

                    {/* Right Content: Icons (Cart always visible, others desktop only) */}
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <IconButton color="inherit" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                            <PersonOutline />
                        </IconButton>
                        <IconButton color="inherit" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
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
                </Container>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
