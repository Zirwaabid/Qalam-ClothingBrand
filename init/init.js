const mongoose = require("mongoose");
const initUn = require("./Unstitched.js");
const Unstitched = require("../models/Unstitched.js");
const Stitched = require("../models/stitched.js");
const initSt = require("./stitched.js");

let mongo_url = "mongodb://127.0.0.1:27017/Qalam";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

const initUnstitch = async () => {
    await Unstitched.deleteMany({});
    await Unstitched.insertMany(initUn.Unstitched);
    console.log("Unstitiched inserted")
};
initUnstitch();

const initStitch = async () => {
    await Stitched.deleteMany({});
    await Stitched.insertMany(initSt.Stitched);
    console.log("Stitched inserted")
};
initStitch();
