import mongoose from 'mongoose'

const MONGO_URI = "mongodb+srv://dheeraj7000:Rajul98@cluster0.eispjzy.mongodb.net/NEWDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
