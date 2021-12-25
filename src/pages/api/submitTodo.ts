import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Todo } from "@prisma/client"
import * as z from 'zod'

const requestBodyScheme = z.object({
  todo: z.string().min(1),
})
const prisma = new PrismaClient()

const submitTodo = async (req: NextApiRequest, res: NextApiResponse<Todo>) => {
  try {
    const result = requestBodyScheme.parse(req.body)
    const body = await prisma.todo.create({
      data: {
        todo: result.todo,
        createdAt: new Date
      }
    })
    res.json(body)
  } catch (error) {
    console.log(error);
  }
}

export default submitTodo
