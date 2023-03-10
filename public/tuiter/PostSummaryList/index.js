/* eslint-env jquery */
import PostSummaryList from "./PostSummaryList.js";
function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <h3>NavigationSidebar</h3>
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    <div class="container">
       ${PostSummaryList()}
   </div>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
   <h3>WhoToFollowList</h3>
   </div>
  </div>
   `);
}
$(exploreComponent);