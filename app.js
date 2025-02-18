//require express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// require and setting for ejs
const path = require("path");
app.set("view engine", "ejs")

//for require views,public folder in every file use following code
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")));

//require and setting for methodoverride
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

// require all models 
const Unstitched = require("./models/Unstitched.js");

// require and setting for mongoose 
const mongoose = require("mongoose");
let mongo_url = "mongodb://127.0.0.1:27017/Qalam";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

// home page
app.get("/qalam", async(req, res) => {
    res.render("listings/index.ejs");
})
// Unstitched page
app.get("/qalam/unstitched",async(req,res)=>{
    const allUnstitched = await Unstitched.find({});
    res.render("listings/unstitched.ejs", { allUnstitched });
})

app.listen("8080", () => {
    console.log("server is listening on port 8080");
});

