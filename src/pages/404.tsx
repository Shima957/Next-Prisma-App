import {
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Box,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Stack spacing={8}>
        <Heading as='h1' size='xl'>
          404 Not Found
        </Heading>
        <Text fontSize='lg'>
          Sorry, but we couldn’t find the page you wanted.
        </Text>
      </Stack>
      <Divider my={6} />

      <Box>
        <NextLink href='/'>
          <Button colorScheme='teal'>Back Home</Button>
        </NextLink>
      </Box>
    </>
  );
};

export default Custom404;
