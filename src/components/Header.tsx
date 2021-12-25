import {
  Flex,
  Button,
  Heading,
  Stack,
  Text,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { AddIcon } from '@chakra-ui/icons';
import AddTodoModal from './AddTodoModal';

const Header = () => {
  const { data: session, status: loading } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Text>{session?.user?.name}</Text>
          <Button colorScheme='teal' leftIcon={<AddIcon />} onClick={onOpen}>
            Add Todo
          </Button>
          <Button
            colorScheme='teal'
            variant='outline'
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
          <AddTodoModal isOpen={isOpen} onClose={onClose} />
        </Stack>
      )}
    </Flex>
  );
};

export default Header;
