import React from 'react';

export default function PostCard({ dateCreated, pictureURL, caption, createdBy, likes, tags, comments }) {
  return (
    <div className="post-card">
      {pictureURL && <img src={pictureURL} alt="Post" className="post-image" />}
      
      {dateCreated && <p>{dateCreated}</p>}
      {caption && <p>{caption}</p>}
      {createdBy && <div className="post-created-by">{createdBy}</div>}
      {/* replace "Likes" and "Tags" below with icon */}
      {likes && <div className="post-likes">Likes: {likes}</div>}

      {tags && (
        <div className="post-tags">
          Tags: {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
{/* need to modify this so that it gets the commentAuthor's profile pic as well */}
      {comments && (
        <div className="post-comments">
          <h4>Comments</h4>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment.commentText}</p>
              <p> {comment.commentAuthor}</p>
              <p> {comment.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
