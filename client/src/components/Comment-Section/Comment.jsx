import CommentForm from "./CommentForm";

const Comment = ({comment,
    replies,
    currentUserId,
    addComment,
    deleteComment,
    updateComment,
    activeComment,
    setActiveComment,
    parentId = null,
}) => {
const canReply = Boolean(currentUserId);
// we can discuss as group whether to implement the timePassed constriction on editing context, pros prevents context changing for replies etc.., cons restricts user
const fiveMinutes = 300000;
const timePassed = new Date () - new Date(comment.dateCreated) > fiveMinutes;
const canEdit = currentUserId === comment.userId && !timePassed;
const canDelete = currentUserId;
const dateCreated = new Date(comment.createdAt).toLocaleDateString();
const isReplying = 
    activeComment && 
    activeComment.type === 'replying' && 
    activeComment.id === comment.id;
const isEditing = 
    activeComment && 
    activeComment.type === 'editing' && 
    activeComment.id === comment.id;
const replyId = parentId ? parentId : comment.id;
return (
    <div className="comment">
        <div className="comment-image-container">
            {/* <img src=""> */}
        </div>
        <div className="comment-right-part">
            <div className="comment-content">
                <div className="comment-author">{comment.username}</div>
                <div>{dateCreated}</div>
            </div>
                {!isEditing && <div className="comment-text">{comment.text}</div>}
                {isEditing && (
                    <CommentForm 
                        submitLabel="Update"
                        hasCancelButton
                        initialText={comment.text}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => setActiveComment(null)}
                    />
                )}
            <div className="comment-actions">
                {canReply && (
                <div 
                    className="comment-action" 
                    onClick={() => 
                        setActiveComment({ id: comment.id, type: "replying" })
                    }
                >
                    Reply
                </div>
                )}
                {canEdit && (
                <div 
                    className="comment-action"
                    onClick={() => 
                        setActiveComment({ id: comment.id, type: "editing" })
                    }
                    >
                        Edit
                    </div>
                )}
                {canDelete && (
                    <div 
                        className="comment-action" 
                        onClick={() => deleteComment(comment.id)}
                    >
                        Delete
                    </div>
                    )}
                {/* <div className="comment-action">Like/Heart Icon</div> we can potentially implement this. need to discuss as group */}
            </div>
            {isReplying && (
                <CommentForm 
                  submitLabel="Reply"
                  handleSubmit={(text) => addComment(text, replyId)}
                />
            )}
            {replies.length > 0 && (
                <div className="replies">
                    {replies.map((reply) => (
                        <Comment 
                            comment={reply}
                            key={reply.id} 
                            replies={[]}
                            currentUserId={currentUserId}
                            addComment={addComment}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            parentId={comment.id}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                        />
                    ))}
                    </div>
            )}
        </div>
    </div>
   )};
   
export default Comment;