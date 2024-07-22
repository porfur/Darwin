import { Hono } from "hono";
import {
  createArtist,
  deleteArtist,
  getAll,
  getAllAlbums,
  getAllArtistsNames,
  getArtistAlbums ,
  updateArtist
} from "../controllers/artist.controller";
const artistRouter = new Hono();

artistRouter.get("/all", getAll);
artistRouter.get("/all-albums", getAllAlbums);
artistRouter.get("/", getAllArtistsNames);
artistRouter.get("/:id/albums",getArtistAlbums );
artistRouter.patch("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);
artistRouter.post("/", createArtist);

export default artistRouter;
