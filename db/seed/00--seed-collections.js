import Monarch from "../../models/Monarch.js";
import monarchJson from "../data/monarchRaw.json" assert { type: "json" };
import Kingdom from "../../models/Kingdom.js";
import kingdomJson from "../data/kingdomRaw.json" assert { type: "json" };
import mongoose from "mongoose";

let monarchData = monarchJson.map(
  ({ name, house, start, end, endReason, kingdom }) => {
    return { name, house, start, end, endReason, kingdom };
  }
);
console.log(monarchData);

let kingdomData = kingdomJson.map(({ title, extract }) => {
  return { title, extract };
});
console.log(kingdomData);

async function allMightyData() {
  await Monarch.deleteMany({});
  await Monarch.create(monarchData);

  await Kingdom.deleteMany({});
  await Kingdom.create(kingdomData);

  // console.log(kingdomData.length);
  // console.log(monarchData.length);
  mongoose.disconnect();
}

allMightyData();
