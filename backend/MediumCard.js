import mongoose from "mongoose";

const airbnbSchema = mongoose.Schema({
  img: String,
  title: String,
  time: { type: Date, default: Date.now },
});

// collection inside the database
export default mongoose.model("airbnbMediumCardSchema", airbnbSchema);
