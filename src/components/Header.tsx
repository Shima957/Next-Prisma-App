import { Flex, Button, Heading, Stack, Text, Box } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <Flex as='header' p={4} justifyContent='space-between'>
      <Heading size='lg'>Todo</Heading>
      {!session ? (
        <Button
          colorScheme='teal'
          variant='outline'
          px={6}
          onClick={() => signIn('github', { callbackUrl: '/' })}
        >
          Sign In with GitHub
        </Button>
      ) : (
        <Stack as='nav' direction='row' spacing={4} alignItems='center'>
          <Text>{session.user?.name}</Text>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Header;
