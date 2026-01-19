'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const Footer: React.FC = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        letterSpacing: '0.1em',
        '&:hover': {
            opacity: 0.8
        }
    };

    return (
        <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: { xs: 8, md: 12 }, width: '100%', mt: 0 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Navigation */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack
                            direction="column"
                            spacing={3}
                            alignItems={{ xs: 'center', md: 'flex-start' }}
                            sx={{ pl: { md: 8 } }}
                        >
                            <Link href="#" sx={linkStyle}>ALL</Link>
                            <Link href="#" sx={linkStyle}>WOMAN</Link>
                            <Link href="#" sx={linkStyle}>MEN</Link>
                        </Stack>
                    </Grid>

                    {/* Center Column: GIF with SVG Overlay */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            minHeight: { xs: '150px', md: '220px' }
                        }}>
                            {/* GIF Layer */}
                            <Box sx={{ display: 'flex', maxWidth: { xs: '180px', md: '260px' }, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                <img
                                    src="/img/footer logo.gif"
                                    alt="Nike Logo GIF"
                                    style={{

                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        transform: 'scale(1.09)'
                                    }}
                                />
                            </Box>
                            {/* SVG Overlay */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                maxWidth: { xs: '220px', md: '320px' },
                                pointerEvents: 'none',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <svg width="100%" height="auto" viewBox="0 0 500 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M133.133 171.466C102.949 185.709 77.8604 192.719 57.7881 192.719C35.2293 192.719 19.1808 183.989 9.18359 166.621C2.94513 155.545 1.00308 141.313 3.65625 123.671C6.22421 106.595 12.9425 88.3464 23.8672 68.8477L24.9375 66.957C32.5093 54.1217 43.9155 38.0567 59.208 18.7334C56.116 26.5738 53.6492 34.7154 51.8447 43.0654L51.8428 43.0723L51.8418 43.0801C45.895 71.389 51.144 92.8976 68.4805 106.71L68.5 106.726C76.8497 113.242 88.1469 116.364 102.122 116.364C113.288 116.364 125.775 114.362 139.561 110.412L139.575 110.407L139.589 110.403L469.42 11.7549L133.133 171.466Z" stroke="white" strokeWidth="5" />
                                </svg>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Navigation */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack
                            direction="column"
                            spacing={3}
                            alignItems={{ xs: 'center', md: 'flex-end' }}
                            sx={{ pr: { md: 8 } }}
                        >
                            <Link href="#" sx={linkStyle}>WORKOUT</Link>
                            <Link href="#" sx={linkStyle}>RUN</Link>
                            <Link href="#" sx={linkStyle}>FOOTBALL</Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
