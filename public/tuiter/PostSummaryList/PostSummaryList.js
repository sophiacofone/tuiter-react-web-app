import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    return (`
           ${
            post.map(who => {
                return (PostSummaryItem(who));
            }).join('')
            }
   `);
}

export default PostSummaryList;