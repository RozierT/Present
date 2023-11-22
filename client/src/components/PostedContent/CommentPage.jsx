import Feed from "./Feed";
import Post from "./PostBody";

const CommentPage = ({ postId, tempPostDataArray }) => {
    // this is it, this is where we will query the database for the comments that are associated with the post id!!!!!!!!!!!!!
    // that data array will go into the feed component
    // the feed component will render the post component for each comment in the array
    // the post component will render the post text component for each comment in the array

    //getting child comments has not yet been solved and will need some work but remember that is NOT MVP only work on if comment MVP is done and nothing else is in need of work (meaning the comments are displayed on the post page)
    
    return (
        <div className="">
            <Feed feedToUse="comment" type={"comment"} dataArray={tempPostDataArray} extraStyles={" border-t-4 border-b-4 border-black"}/>
        </div>
    );
    }
export default CommentPage;