'use client';

import React from 'react';
import { Box, Container, Typography, Grid, CircularProgress, Button, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { useGetProductsQuery } from '@/services/productApi';

export default function Home() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />


      <main style={{ flexGrow: 1, overflowX: 'hidden' }}>
        {/* Mobile-only Top Banner Image */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
          <img
            src="/img/mob header 1.jpg"
            alt="Mobile Header"
            style={{ width: '100%', display: 'block' }}
          />
        </Box>

        {/* Promotional Banner Section - WE ARE NEVER DONE */}
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#000',
            color: 'white',
            py: { xs: 3, md: 8 },
            mb: 0,
            backgroundImage: {
              xs: 'url(/img/mob header 2.jpg)',
              md: 'url(/img/hero1.png)'
            },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontStyle: 'italic',
                  mb: 2,
                  fontSize: { xs: '1.25rem', md: '2.5rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                WE ARE NEVER DONE
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 0.5,
                  fontWeight: 900,
                  fontSize: { xs: '14px', md: '18px' },
                  fontFamily: 'var(--font-montserrat), sans-serif',
                }}
              >
                Celebrating 50 years of Nike from May 16th!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2.5,
                  fontWeight: 900,
                  fontSize: { xs: '13px', md: '18px' },
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  lineHeight: 1.5,
                  maxWidth: '90%'
                }}
              >
                Exclusive products, experiences and much more await you for five days. Scan and join the Nike app!
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    fontWeight: 700,
                    px: 3.5,
                    py: 1,
                    borderRadius: 50,
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    '&:hover': {
                      bgcolor: '#f0f0f0'
                    }
                  }}
                >
                  Celebrate with us
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <Hero />

        {/* Overlapping Promotional Cards Section */}
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mb: 12, position: 'relative', zIndex: 10, mt: -8.5, px: { xs: 2.5, md: 0 } }}>
          <Grid container spacing={6}>
            {/* Card 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: '#EFEFEF',
                  borderRadius: '18px',
                  p: { xs: 2, md: 5 },
                  height: { xs: 150, md: 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ maxWidth: '60%', zIndex: 2, ml: { md: 2 } }}>
                  <Typography
                    sx={{
                      color: '#FF3939',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: { xs: '16px', md: '40px' },
                      lineHeight: '1.2',
                      mb: 0.5,
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    NEW
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: '12px', md: '18px' },
                      lineHeight: '1.4',
                      letterSpacing: '0.01em',
                      color: '#000000',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    AIR JORDAN 1 MID<br />LIGHT SMOKE GREY
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      width: { xs: 35, md: 50 },
                      height: { xs: 35, md: 50 },
                      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                      '&:hover': {
                        bgcolor: '#f9f9f9'
                      }
                    }}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 22, color: '#000000', transform: 'rotate(-30deg)' }} />
                  </Box>
                </Box>

                {/* Product Image with rotation and overflow */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: '0%', md: '-5%' },
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: { xs: '50%', md: '60%' },
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <img
                    src="/img/new1.png"
                    alt="New Product"
                    style={{
                      width: '100%',
                      height: 'auto',
                      transform: 'rotate(-30deg)',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Card 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: '#EFEFEF',
                  borderRadius: '18px',
                  p: { xs: 2.5, md: 5 },
                  height: { xs: 180, md: 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ maxWidth: '60%', zIndex: 2, ml: { md: 2 } }}>
                  <Typography
                    sx={{
                      color: '#FF3939',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: { xs: '16px', md: '40px' },
                      lineHeight: '1.2',
                      mb: 0.5,
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    NEW
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      mb: 2,
                      fontSize: { xs: '14px', md: '18px' },
                      lineHeight: '1.4',
                      letterSpacing: '0.01em',
                      color: '#000000',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    Air Max<br />200 SE
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      width: { xs: 35, md: 50 },
                      height: { xs: 35, md: 50 },
                      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                      '&:hover': {
                        bgcolor: '#f9f9f9'
                      }
                    }}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 22, color: '#000000', transform: 'rotate(-30deg)' }} />
                  </Box>
                </Box>

                {/* Product Image with rotation and overflow */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: '0%', md: '-5%' },
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: { xs: '50%', md: '60%' },
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.25))'
                  }}
                >
                  <img
                    src="/img/new2.png"
                    alt="New Product"
                    style={{
                      width: '100%',
                      height: 'auto',
                      transform: 'rotate(-30deg)',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ mt: 10 }}>
          {/* Secondary Heading Section - Moved here to allow cards to overlap Hero Banner */}
          <Container maxWidth="xl" sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: { xs: '14px', md: '24px' },
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              At the moment
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                textTransform: 'uppercase',
                fontStyle: 'italic',
                mb: 2,
                fontSize: { xs: '2rem', md: '5rem' },
                lineHeight: 1,
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              SUMMERTIME MOOD
            </Typography>
            <Typography
              sx={{
                color: '#666',
                fontSize: { xs: '14px', md: '24px' },
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              Fight the heat in a sunny look!
            </Typography>
          </Container>
        </Box>

        {/* Top Sneakers Section */}
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Top sneakers
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                sx={{
                  bgcolor: '#f5f5f5',
                  color: 'black',
                  '&:hover': { bgcolor: '#e0e0e0' },
                  width: 45,
                  height: 45
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: '#333',
                  color: 'white',
                  '&:hover': { bgcolor: '#000' },
                  width: 45,
                  height: 45
                }}
              >
                <ArrowForwardIos sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>
          </Box>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : isError ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography color="error">Failed to load products. Please check backend connection.</Typography>
            </Box>
          ) : (
            <Grid container spacing={5}>
              {products.map((product) => (
                <Grid size={{ xs: 6, sm: 6, md: 4 }} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
              {products.length === 0 && (
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ textAlign: 'center', py: 4, color: '#999' }}>
                    No products found in Hygraph. Add products to your Hygraph CMS to see them here.
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
        </Container>

        {/* Category Section - Redesigned to match Figma */}
        <Container maxWidth="xl" sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, fontFamily: 'Montserrat, sans-serif' }}>
            Buy by category
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* WORKOUT Row */}
            <Grid container sx={{ height: { xs: 'auto', md: 450 } }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', height: { xs: 150, md: 450 } }}>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: { xs: '1.5rem', md: '3.5rem' },
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  WORKOUT
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ height: { xs: 200, md: 450 } }}>
                <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img src="/img/workout.gif" alt="Workout" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Mobile Mobile Only Overlay Label */}
                  <Typography
                    sx={{
                      display: { xs: 'block', md: 'none' },
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      fontStyle: 'italic',
                      fontSize: '1.5rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      zIndex: 2,
                      textShadow: '0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    WORKOUT
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* RUN Row (Alternated) */}
            <Grid container sx={{ height: { xs: 'auto', md: 450 }, flexDirection: { xs: 'column-reverse', md: 'row' } }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ height: { xs: 200, md: 450 } }}>
                <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img src="/img/run.gif" alt="Run" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Mobile Mobile Only Overlay Label */}
                  <Typography
                    sx={{
                      display: { xs: 'block', md: 'none' },
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      fontStyle: 'italic',
                      fontSize: '1.5rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      zIndex: 2,
                      textShadow: '0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    RUN
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', height: { xs: 150, md: 450 } }}>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: { xs: '1.5rem', md: '3.5rem' },
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  RUN
                </Typography>
              </Grid>
            </Grid>

            {/* FOOTBALL Row */}
            <Grid container sx={{ height: { xs: 'auto', md: 450 } }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', bgcolor: '#fff', height: { xs: 150, md: 450 } }}>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: { xs: '1.5rem', md: '3.5rem' },
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  FOOTBALL
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ height: { xs: 200, md: 450 } }}>
                <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img src="/img/football.gif" alt="Football" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Mobile Mobile Only Overlay Label */}
                  <Typography
                    sx={{
                      display: { xs: 'block', md: 'none' },
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      fontStyle: 'italic',
                      fontSize: '1.5rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      zIndex: 2,
                      textShadow: '0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    FOOTBALL
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* More Products Section - Redesigned with Discount Cards */}
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mb: 10, overflow: 'visible', px: { xs: 2.5, md: 0 } }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, fontFamily: 'Montserrat, sans-serif' }}>
            LOOKS GOOD, RUNS GOOD, FEELS GOOD.
          </Typography>
          <Grid container spacing={6}>
            {/* Discount Card 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: '#EFEFEF',
                  borderRadius: '18px',
                  p: { xs: 2, md: 5 },
                  height: { xs: 160, md: 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ maxWidth: '60%', zIndex: 2 }}>
                  <Typography
                    sx={{
                      color: '#FF3939',
                      fontWeight: 900,
                      fontSize: { xs: '16px', md: '32px' },
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.2,
                      mb: 0.5
                    }}
                  >
                    -20% Discount
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: '13px', md: '20px' },
                      fontFamily: 'Montserrat, sans-serif',
                      mb: 3,
                      color: '#000'
                    }}
                  >
                    on your first purchase
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#000',
                      color: '#fff',
                      borderRadius: '10px',
                      textTransform: 'none',
                      px: 4,
                      py: 1,
                      fontWeight: 600,
                      fontFamily: 'Montserrat, sans-serif',
                      '&:hover': {
                        bgcolor: '#333'
                      }
                    }}
                  >
                    Shop now
                  </Button>
                </Box>

                {/* Product Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: '0%', md: '-5%' },
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: { xs: '50%', md: '60%' },
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <img
                    src="/img/card1.png"
                    alt="Promo Product 1"
                    style={{
                      width: '100%',
                      height: 'auto',
                      transform: 'rotate(-30deg)',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Discount Card 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: '#EFEFEF',
                  borderRadius: '18px',
                  p: { xs: 2, md: 5 },
                  height: { xs: 160, md: 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.25)',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ maxWidth: '60%', zIndex: 2 }}>
                  <Typography
                    sx={{
                      color: '#FF3939',
                      fontWeight: 900,
                      fontSize: { xs: '16px', md: '32px' },
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.2,
                      mb: 0.5
                    }}
                  >
                    -20% Discount
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: '13px', md: '20px' },
                      fontFamily: 'Montserrat, sans-serif',
                      mb: 3,
                      color: '#000'
                    }}
                  >
                    on your first purchase
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#000',
                      color: '#fff',
                      borderRadius: '10px',
                      textTransform: 'none',
                      px: 4,
                      py: 1,
                      fontWeight: 600,
                      fontFamily: 'Montserrat, sans-serif',
                      '&:hover': {
                        bgcolor: '#333'
                      }
                    }}
                  >
                    Shop now
                  </Button>
                </Box>

                {/* Product Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: '0%', md: '-5%' },
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: { xs: '50%', md: '60%' },
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.25))'
                  }}
                >
                  <img
                    src="/img/card2.png"
                    alt="Promo Product 2"
                    style={{
                      width: '100%',
                      height: 'auto',
                      transform: 'rotate(-30deg)',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* MORE NIKE PRODUCTS Section */}
        <Container maxWidth="xl" sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, fontFamily: 'Montserrat, sans-serif' }}>
            MORE NIKE PRODUCTS
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '250px', md: '350px' },
              backgroundImage: 'url(/img/membership.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              px: { xs: 4, md: 8 }
            }}
          >
            <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: { xs: '1.5rem', md: '3.5rem' },
                  fontFamily: 'Montserrat, sans-serif',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  mb: 2
                }}
              >
                YOUR NIKE MEMBERSHIP
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1.25rem' },
                  fontFamily: 'Montserrat, sans-serif',
                  mb: 4
                }}
              >
                Join our members and show your love with Nike By You!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  borderRadius: '30px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  '&:hover': {
                    bgcolor: '#f0f0f0'
                  }
                }}
              >
                Join Us
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Glory to Ukraine Section */}
        <Box sx={{ py: 5, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              letterSpacing: '0.1em',
              fontWeight: 400,
              color: '#000',
              textTransform: 'uppercase'
            }}
          >
            THANKS FOR WATCHING
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '32px', md: '48px' },
              fontWeight: 900,
              fontStyle: 'italic',
              color: '#000',
              mb: 1
            }}
          >
            Glory to Ukraine
          </Typography>
          <Box sx={{ width: 80, height: 50 }}>
            <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.67858C0 2.67858 12.1021 5.35717 20 5.35717C27.8979 5.35717 40 2.67858 40 2.67858C40 2.67858 52.1021 0 60 0C67.8979 0 80 2.67858 80 2.67858V25.0001C80 25.0001 67.8979 22.3215 60 22.3215C52.1021 22.3215 40 25.0001 40 25.0001C40 25.0001 27.8979 27.6787 20 27.6787C12.1021 27.6787 0 25.0001 0 25.0001V2.67858Z" fill="#53C8FB" />
              <path d="M0 24.9999C0 24.9999 12.1021 27.6785 20 27.6785C27.8979 27.6785 40 24.9999 40 24.9999C40 24.9999 52.1021 22.3213 60 22.3213C67.8979 22.3213 80 24.9999 80 24.9999V47.3214C80 47.3214 67.8979 44.6428 60 44.6428C52.1021 44.6428 40 47.3214 40 47.3214C40 47.3214 27.8979 50 20 50C12.1021 50 0 47.3214 0 47.3214V24.9999Z" fill="#FFED46" />
            </svg>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
}
