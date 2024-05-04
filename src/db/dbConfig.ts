import mongoose from "mongoose";
export async function connect() {
  try {
    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    // Get the error if there is any
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });

    // Catch Errors
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
