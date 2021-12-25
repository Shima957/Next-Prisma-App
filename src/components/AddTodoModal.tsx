import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import axios from 'axios';
import { VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormValue = {
  todo: string;
};

const AddTodoModal: VFC<Props> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    const res = await axios.post('/api/submitTodo', data);
    if (res.status === 200) {
      onClose();
    }
  };

  const modalClose = () => {
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Todo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>Todo</FormLabel>
              <Input {...register('todo')} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button type='submit' isLoading={isSubmitting}>
                Add
              </Button>
              <Button onClick={modalClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddTodoModal;
