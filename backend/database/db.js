import mongoose from "mongoose";

const connectToMyDatabase = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_URI}/userFeedback`;

    const connectionInstance = await mongoose.connect(mongoURI);

    console.log(
      `\nMongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Connection FAILED!!", error);
    process.exit(1);
  }
};

export default connectToMyDatabase;
