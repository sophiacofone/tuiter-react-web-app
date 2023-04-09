import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
       <ul>
           <div class="list-group bold">
               <div class="list-group-item rounded-0" href="/">
                Who to follow
               </div>
           </div>
           ${
            who.map(who => {
                return (WhoToFollowListItem(who));
            }).join('')
            }
       </ul>
   `);
}

export default WhoToFollowList;