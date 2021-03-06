import Todos from '@/components/Todos';
import { Heading, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Heading size='lg'>Todos</Heading>
      <Box mt={8}>
        <Todos />
      </Box>
    </Box>
  );
};

export default Home;
