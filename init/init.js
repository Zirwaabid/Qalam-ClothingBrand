const mongoose = require("mongoose");
const initUn = require("./Unstitched.js");
const Unstitched = require("../models/Unstitched.js");
const Stitched = require("../models/stitched.js");
const initSt = require("./stitched.js");
const Fragnance = require("../models/fragnances.js");
const initFrag = require("./fragnance.js");
const Beauty = require("../models/beauty.js");
const initBe = require("./beauty.js");

let mongo_url = "mongodb://127.0.0.1:27017/Qalam";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

// Unstitched 
const initUnstitch = async () => {
    await Unstitched.deleteMany({});
    await Unstitched.insertMany(initUn.Unstitched);
    console.log("Unstitiched inserted")
};
initUnstitch();

// stitched 
const initStitch = async () => {
    await Stitched.deleteMany({});
    await Stitched.insertMany(initSt.Stitched);
    console.log("Stitched inserted")
};
initStitch();

// fragnance 
const initFragnance = async () => {
    await Fragnance.deleteMany({});
    await Fragnance.insertMany(initFrag.Fragnance);
    console.log("Fragnances inserted")
};
initFragnance();

// beauty
const initBeauty = async () => {
    await Beauty.deleteMany({});
    await Beauty.insertMany(initBe.Beauty);
    console.log("Beauty Products are inserted")
};
initBeauty();