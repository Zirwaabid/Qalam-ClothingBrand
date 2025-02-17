const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const UnstitchedSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: Number,
    color: String,
    about: [{
        _id: false,
        description: String,
        Shirt: String,
        Dupatta: String,
        trouser: String
    }],
    image: String,
    disclaimer: String,
});

const Unstitched = mongoose.model("Unstitched", UnstitchedSchema);
module.exports = Unstitched;