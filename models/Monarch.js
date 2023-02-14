import mongoose from "../db/connection.js";

const monarchSchema = new mongoose.Schema({
  name: String,
  house: String,
  start: String,
  end: String,
  endReason: String,
  kingdom: Object,
});

export default mongoose.model("Monarch", monarchSchema);
