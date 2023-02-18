/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";


function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <div class="container">
       ${NavigationSidebar()}
   </div>
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    <h3>ExploreComponent</h3>
    <div class="container">
       ${PostSummaryList()}
   </div>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <div class="container">
       ${WhoToFollowList()}
   </div>
   </div>
  </div>
   `);
}
$(exploreComponent);