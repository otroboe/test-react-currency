import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

import CurrencyConverter from '@/components/CurrencyConverter';

const Home = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 6 }}>
          React Currency Converter
        </Typography>

        <CurrencyConverter />
      </Box>
    </Container>
  );
};

export default Home;
