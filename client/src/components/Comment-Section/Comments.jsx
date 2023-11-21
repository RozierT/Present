import { useEffect } from "react";
import { useState } from "react";
// TODO: createimport { getComments, createComment, removeComment, updateEditedComment} ... need to make a helpers file for our api calls to the server
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(backendComments.parentId === null);
    const getReplies = commentId => {
        return backendComments.filter(backendComment => 
            // toString() may need to use this after parentId to be compatibile with mongoDB _id ???
            backendComment.parentId === commentId).sort((a, b) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
        );
    };
    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId);
        createComment(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            removeComment(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments)
            });
        }
    };
    const updateComment = (text, commentId) => {
        updateEditedComment(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, text: text };
                } 
                    return backendComment;
            });
            setBackendComments(updatedBackendComments);
        });
    }
    useEffect(() => {
        getComments().then((data) => {
            setBackendComments(data)
        });
    }, []);

 return (
    <div className="comments">
    <div className="comment-form-title">Add a comment</div>
    
    <div className="comments-container">
    {rootComments.map((rootComment) =>(
        <Comment 
            key={rootComment.id} 
            comment={rootComment} 
            replies= {getReplies(rootComment.id)}
            currentUserId={currentUserId}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            />
    ))}
    <CommentForm submitLabel="Write" handleSubmit={addComment}/>
 </div>
 </div>
 );
};

export default Comments;