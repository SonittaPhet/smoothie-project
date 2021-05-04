const mongoose = require("mongoose");

const SmoothieSchema = mongoose.Schema({
    smoothie_information: {
        name: {type: String, required: true},
        type: {type: String, required: true},
        ingredients: {type: String, required: true},
        smoothieImage: {type: String, required: true}
    },
});

const Smoothie = mongoose.model("Smoothie", SmoothieSchema);

module.exports = { Smoothie };