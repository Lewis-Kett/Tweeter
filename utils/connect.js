import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => console.log("connected to mongo"))
  .on("close", () => console.log("connection closed"))
  .on("error", (err) => console.log("db error", err));

module.exports = mongoose;
