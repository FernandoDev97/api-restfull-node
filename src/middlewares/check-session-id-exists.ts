import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessiIdExists(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      error: 'Anauthorized',
    })
  }
}
