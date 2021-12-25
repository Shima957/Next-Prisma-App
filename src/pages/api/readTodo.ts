import { PrismaClient, Todo } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const readTodo = async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: 'asc'
    }
  })

  res.json(todos)
}

export default readTodo
