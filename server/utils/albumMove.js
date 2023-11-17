// we want current album of all users to be moved into scrapbook every week
// need a dependency- node-schedule

// const schedule = require('node-schedule');


const moveAlbums = async () => {
    
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const users = await User.find({});

    for (let user of users) {

        const album = await Album.findById(user.currentAlbum);
        
        if (album.dateAdded < oneWeekAgo) {
            user.scrapbook.push(user.currentAlbum);
            user.currentAlbum = null;
            await user.save();
        }
    }
};

// Schedule the moveAlbums function to run every Monday at 12:00 PM
// const rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = 1; // 1 is Monday
// rule.hour = 12; // 12 is 12:00 PM
// rule.minute = 0;

// schedule.scheduleJob(rule, moveAlbums);