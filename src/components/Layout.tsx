import { Box, calc, Container } from '@chakra-ui/react';
import { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <Container maxW='1240px' p={0}>
      <Header />
      <Box py={10} px={4} height='calc(100vh - 72px)'>
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
