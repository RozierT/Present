const { Schema } = require('mongoose')

const flairSchema = new Schema({
    tag: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 100
    }
});

module.exports = flairSchema