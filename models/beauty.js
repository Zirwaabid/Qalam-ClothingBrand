const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const BeautySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: Number,
    color: String,
    about: String,
    image: String,
    disclaimer: String,
});

const Beauty = mongoose.model("Beauty", BeautySchema);
module.exports = Beauty;