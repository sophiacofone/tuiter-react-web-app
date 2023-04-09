import PostListItem from "./PostListItem.js";
import post from "./posts.js";

const PostList = () => {
    return (`
           ${
            post.map(post => {
                return (PostListItem(post));
            }).join('')
            }
   `);
}

export default PostList;