import prisma from "@/lib/prisma"
import { NextApiHandler } from "next"

const deleteTodo: NextApiHandler = async (req, res) => {
  const { id } = req.query
  const deleteId = parseInt(id as string)
  const resutl = await prisma.todo.delete({
    where: {
      id: deleteId
    }
  })

  res.json(resutl)
}

export default deleteTodo
