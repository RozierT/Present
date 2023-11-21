import { useEffect } from "react";
import { useState } from "react";
// TODO: createimport { getComments, createComment } from 
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({currentUserId}) => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter(backendComments.parentId === null);
    const getReplies = commentId => {
        return backendComments.filter(backendComment => 
            backendComment.parentId === commentId).sort((a, b) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
        );
    }
    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId)
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
        <Comment key={rootComment.id} comment={rootComment} replies= {getReplies(rootComment.id)}/>
    ))}
    <CommentForm submitLabel="Write" handleSubmit={addComment}/>
 </div>
 </div>
 );
};

export default Comments;