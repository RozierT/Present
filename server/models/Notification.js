const { Schema, model } = require('mongoose');


const notificationSchema = new Schema({
    userOfOrigin: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    textContent: {
        type: String,
        maxlength: 280
    },
    profilePicture: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
})

const Notification = model('notification', notificationSchema)

module.exports = Notification