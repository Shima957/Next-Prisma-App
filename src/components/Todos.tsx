import { DeleteIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text, VStack, Fade } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addTodoFlag, todoListState } from '@/atoms/todoAtoms';

const Todos = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const addFlag = useRecoilValue(addTodoFlag);
  const setAddFlag = useSetRecoilState(addTodoFlag);

  const fetchData = async () => {
    const res = await axios.get('/api/readTodo');
    setTodoList(res.data);
    setAddFlag(false);
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`/api/deleteTodo/${id}`);
    const deletedTodos = todoList.filter((todo) => todo.id != id);
    setTodoList(deletedTodos);
  };

  useEffect(() => {
    fetchData();
  }, [addFlag]);

  return (
    <VStack spacing={6}>
      {todoList.map((todo) => (
        <HStack
          key={todo.id}
          p={4}
          cursor='pointer'
          rounded='lg'
          bg='blue.600'
          w='full'
          justifyContent='space-between'
          transitionDuration='0.2s'
          _hover={{ bgColor: 'blue.700' }}
        >
          <Text fontSize='xl'>{todo.todo}</Text>
          <IconButton
            aria-label='delete button'
            icon={<DeleteIcon />}
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default Todos;
