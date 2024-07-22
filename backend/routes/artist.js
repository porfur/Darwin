import { Hono } from "hono";
import {
  createArtist,
  deleteArtist,
  getAll,
  getAllAlbums,
  getAllArtistsNames,
  updateArtist
} from "../controllers/artist.controller";
const artistRouter = new Hono();

artistRouter.get("/", getAllArtistsNames);
artistRouter.patch("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);
artistRouter.get("/all", getAll);
artistRouter.get("/all-albums", getAllAlbums);
artistRouter.post("/", createArtist);
artistRouter.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ name: id });
});

export default artistRouter;
