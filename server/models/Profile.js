const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
})