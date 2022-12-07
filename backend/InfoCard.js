import mongoose from "mongoose";

const airbnbSchema = mongoose.Schema({
  img: String,
  location: String,
  description: String,
  title: String,
  star: Number,
  price: Number,
  total: Number,
  longitude: String,
  latitude: String,
  time: { type: Date, default: Date.now },
});

// collection inside the database
export default mongoose.model("airbnbInfoCardSchema", airbnbSchema);
