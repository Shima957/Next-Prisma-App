import { Flex, Button, Heading, Stack } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as='header' p={4} justifyContent='space-between'>
      <Heading size='lg'>Todo</Heading>
      <Stack as='nav' direction='row' spacing={4}>
        <Button colorScheme='teal' variant='outline' px={6}>
          Sign In
        </Button>
        <Button colorScheme='teal'>create account</Button>
      </Stack>
    </Flex>
  );
};

export default Header;
