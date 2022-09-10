import mongoose from "mongoose";

const airbnbSchema = mongoose.Schema({
  img: String,
  distance: String,
  location: String,
  time: { type: Date, default: Date.now },
});

// collection inside the database
export default mongoose.model("airbnbSmallCardSchema", airbnbSchema);
