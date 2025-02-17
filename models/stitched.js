const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const StitchedSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: Number,
    size: String,
    color: String,
    about: [{
        _id: false,
        description: String,
        Shirt: String,
        trouser: String
    }],
    image: String,
    disclaimer: String,
});

const Stitched = mongoose.model("Stitched", StitchedSchema);
module.exports = Stitched;