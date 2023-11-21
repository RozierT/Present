import React, { useState } from 'react'

import MyButton from '../profile/MyButton'

const PostText = ({ data, type }) => {
    let lowerButtonDescription;
type === 'post' && data.comments.length > 0 ? 
lowerButtonDescription = `see all comments ( ${data.comments.length} )` :
type === 'comment' && data.comments.length > 0 ?
lowerButtonDescription = `join the thread ( ${data.comments.length} )`:
type === 'post'? 
lowerButtonDescription = "add a comment" :
type === 'comment'?
lowerButtonDescription = "reply in thread":

lowerButtonDescription = "dismiss";

const [showComments, setShowComments] = useState(false);

const toggleComments = () => {
    setShowComments(!showComments);
    console.log("show Comments", showComments);
}
    return (
        <>
        <div className="text-base pl-4 pt-2 pr-4 pb-4 bg-bkg-2 "> {data.textContent}</div>
        
        <div className="text-base pl-4 pt-2 pr-4 pb-4 bg-bkg-2 border-t-2 border-b-2 border-accent-2"> {data.comments[0]}</div>
        

        
        <MyButton  size={"full"} type={"bordered"} content={lowerButtonDescription} action={toggleComments} shape={"square"} />
        </>
    )
}

export default PostText