import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Connected to MongoDB`.green);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    // If error, exit with failure
    process.exit(1);
  }
};

export default connectMongoDB;
