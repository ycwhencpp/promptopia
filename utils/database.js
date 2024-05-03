import mongoose from "mongoose";
export const connectToDb = async () => {
  let isConnected = false;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDb connected succesfully");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptopia",
    });

    isConnected = true;
    console.log("MongoDB connnected");
  } catch (error) {
    console.log(error);
  }
};
