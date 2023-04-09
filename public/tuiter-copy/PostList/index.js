/* eslint-env jquery */
import PostList from "./PostList.js";
function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <h3>NavigationSidebar</h3>
   </div>
   <div class="col-10 col-lg-11 col-xl-10">
    <div class="container">
       ${PostList()}
   </div>
   </div>
  </div>
   `);
}
$(exploreComponent);