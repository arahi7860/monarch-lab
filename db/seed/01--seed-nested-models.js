import Kingdom from "../../models/Kingdom.js";
import Monarch from "../../models/Monarch.js";

async function newDataset() {
  let kingdoms = await Kingdom.find({});
  kingdoms.forEach(async (kinship) => {
    await Monarch.updateMany(
      { kingdom: kinship.title },
      { $set: { kingdom: kinship } }
    );
  });
  let check = await Monarch.find({});
  console.log(check);
}

newDataset();
