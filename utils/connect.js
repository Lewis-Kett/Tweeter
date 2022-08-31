import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => console.log("connected to mongo"))
  .on("close", () => console.log("connection closed"))
  .on("error", (err) => console.log("db error", err));

module.exports = mongoose;
