import { ObjectId } from "mongodb";
import { artistModel } from "../models/artist";

export async function getAll(c, next) {
  try {
    const all = await artistModel.find({});
    console.log(all);
    return c.json(all);
  } catch (error) {
    console.log("Could not getAllArtists", error);
    return c.notFound();
  }
}

export async function getAllAlbums(c, next) {
  try {
    const allAlbums = await artistModel.aggregate([
      {
        $unwind: {
          path: "$albums",
        },
      },
      {
        $project: {
          albumTitle: "$albums.title",
        },
      },
    ]);

    return c.json(allAlbums);
  } catch (error) {
    console.log("Could not get albums", error);
    return c.notFound();
  }
}

export async function getArtistAlbums(c, next) {
  try {
    const artistId = await c.req.param("id");
    console.log(artistId);
    const albumNames = await artistModel.aggregate([
      {
        $match: {
          _id: new ObjectId(artistId),
        },
      },
      {
        $unwind: {
          path: "$albums",
        },
      },
      {
        $project: {
          title: "$albums.title",
          songs: "$albums.songs",
          description: "$albums.description",
        },
      },
    ]);

    return c.json(albumNames);
  } catch (error) {
    console.log("Could not get album names", error);
    return c.notFound();
  }
}

export async function getAllArtistsNames(c) {
  try {
    const allArtists = await artistModel.aggregate([
      {
        $project: { name: "$name" },
      },
    ]);
    return c.json(allArtists);
  } catch (error) {
    console.log("Could not get artists", error);
    return c.notFound();
  }
}

export async function createArtist(c, next) {
  const req = await c.req.json();
  console.log(req);
  try {
    const user = new artistModel(req);
    await user.save();
    return c.json(user);
  } catch (error) {
    const errorResponse = {
      error,
      status: 500,
      message: `Could not create artist ${req.name}`,
    };
    if (error.code === 11000) {
      const key = Object.keys(error.keyValue)[0];
      errorResponse.status = 400;
      errorResponse.message = `The artist ${key} already exists.`;
    }
    console.error(errorResponse);
    return c.json(errorResponse);
  }
}

export async function updateArtist(c) {
  try {
    const _id = await c.req.param("id");
    const update = await c.req.json();
    const artist = await artistModel.findByIdAndUpdate({ _id }, update, {
      new: true,
    });
    return c.json(artist);
  } catch (error) {
    const errorResponse = {
      error,
      status: 500,
      message: `Could not update artist ${req.name}`,
    };
    return c.json(errorResponse);
  }
}

export async function deleteArtist(c) {
  try {
    const _id = await c.req.param("id");
    const artist = await artistModel.deleteOne({ _id });
    return c.json(artist);
  } catch (error) {
    const errorResponse = {
      error,
      status: 500,
      message: `Could not update artist ${req.name}`,
    };
    return c.json(errorResponse);
  }
}
