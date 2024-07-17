import mongoose from "mongoose";

export async function connectToDB () {
  try {
    await mongoose.connect(Bun.env.DB_URI,{dbName:'TestDB'})
  } catch (error) {
    console.log(error)
  }
}
