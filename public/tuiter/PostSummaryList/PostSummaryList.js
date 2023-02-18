import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    return (`
       <ul>
           ${
            post.map(who => {
                return (PostSummaryItem(who));
            }).join('')
            }
       </ul>
   `);
}

export default PostSummaryList;