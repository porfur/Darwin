import { artistModel } from "../models/artist";

export async function getAllArtists(c, next) {
  // console.log("GERE",c,"GEERE", next)
  try {
    const allArtists = await artistModel.find({});
    console.log(allArtists);
    return new Response(allArtists);
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(c, next) {
  try {
    console.log(c, next);
    const user = new artistModel({
      name: "adf",
    });
    await user.save();
    return next(c);
  } catch (err) {
    console.log(err);
  }
}
