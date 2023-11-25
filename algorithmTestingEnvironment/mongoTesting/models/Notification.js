const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    profilePicture: String,
    dateCreated: Date,
    textContent: String,
   });
   
   const Notification = model('Notification', notificationSchema);

module.exports = Notification;