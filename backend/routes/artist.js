import { Hono } from "hono";
import { createUser, getAllArtists } from "../controllers/artist.controller";
const artistRouter = new Hono()

artistRouter.get('/', createUser) 

artistRouter.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({name:  id })
})

export default artistRouter
