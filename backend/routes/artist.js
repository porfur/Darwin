import { Hono } from "hono";
const artistRouter = new Hono()

artistRouter.get('/', (c) => {
  return c.json({ count:2}) }) 
artistRouter.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({name:  id })
})

export default artistRouter
