import { Box, Text, VStack } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchData = async () => {
    const res = await axios.get('/api/readTodo');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VStack spacing={6}>
      {todos.map((todo) => (
        <Box
          key={todo.id}
          p={4}
          cursor='pointer'
          rounded='lg'
          bg='blue.600'
          w='full'
          transitionDuration='0.2s'
          _hover={{ bgColor: 'blue.700' }}
        >
          <Text fontSize='xl'>{todo.todo}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Todos;
