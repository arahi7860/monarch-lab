import mongoose from "../db/connection.js";

const kingdomSchema = new mongoose.Schema({
  title: String,
  extract: String,
});

export default mongoose.model("Kingdom", kingdomSchema);
