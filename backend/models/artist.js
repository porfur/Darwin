import mongoose from "mongoose";
import { Schema } from "mongoose";

const songSchema = new Schema({
  title: { type: String, required: false },
  length: { type: String, required: false },
});

const albumSchema = new Schema({
  title: { type: String, required: false },
  songs: { type: [songSchema], required: false },
  description: { type: String, required: false },
});

const artistSchema = new Schema({
  name: { type: String, required: true },
  albums: [albumSchema],
});

export const artistModel = mongoose.model("Artist", artistSchema);
