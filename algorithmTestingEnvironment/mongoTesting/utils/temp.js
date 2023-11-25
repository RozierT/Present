// temporary housing of random code logic to be implemented elswhere


// get latest 7 posts

Post
.find({ userId: userId }) // Find posts made by the user
.sort({ createdAt: -1 }) // Sort by the date they were created in descending order
.limit(7) // Limit the results to the 7 most recent posts
.populate('userId') // Replace the userId in the Post documents with the actual User document
.exec(function(err, posts) {
if (err) return handleError(err);
console.log(posts);
});

// example of restricting replies to a comment to Post owner/user

app.post('/comment/reply', async (req, res) => {
    const { commentId, userId, replyText } = req.body;

// Fetch the comment
const comment = await Comment.findById(commentId);

// Check if the user is the owner of the post
if (comment.post.userId.toString() !== userId) {
    return res.status(403).send('You cannot reply to this comment.');
}

// Create the reply
const reply = new Comment({
    text: replyText,
    user: userId,
    // Other reply fields...
});

await reply.save();

// Add the reply to the comment
comment.replies.push(reply);
await comment.save();

res.send('Reply created.');
});

