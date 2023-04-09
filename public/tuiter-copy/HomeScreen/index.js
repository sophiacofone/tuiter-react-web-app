/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import HomeComponent from "./HomeComponent.js";


function home() {
    const path = window.location.pathname;
    let active = '';

    if (path.endsWith('/HomeScreen/index.html')) {
        active = 'home';
    } else if (path.endsWith('/explore/index.html')) {
        active = 'explore';
    }

    $('#wd-home').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <div class="container">
       ${NavigationSidebar(active)}
   </div>
   </div>
   <div class="col-10 col-lg-11 col-xl-10">
    <div class="container">
       ${HomeComponent()}
   </div>
   </div>
  </div>
   `);
}
$(home);