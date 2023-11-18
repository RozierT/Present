// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const albumSchema = new Schema({
//     dateAdded: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//     },
//     photoset: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: 'Post',
//         }
//     ],
// })

// const Album = model('album', albumSchema)

// module.exports = Album