import { Todo } from '@prisma/client'
import { atom } from 'recoil'

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: []
})

export const addTodoFlag = atom<boolean>({
  key: 'addTodoFlag',
  default: false
})
