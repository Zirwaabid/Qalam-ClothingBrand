const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const FragnanceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: Number,
    size: String,
    about: [{
        _id: false,
        top: String,
        heart: String,
        base: String
    }],
    image: String,
    disclaimer: String,
});

const Fragnance = mongoose.model("Fragnance", FragnanceSchema);
module.exports = Fragnance;