const { Schema, model } = require('mongoose')

const linkSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    imageSrc: {
        type: String,
        required: true,
        trim: true
    }
})

const Link = model('link', linkSchema)

module.exports = Link