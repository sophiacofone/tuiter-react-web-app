/* eslint-env jquery */
import NavigationSidebar from "./NavigationSidebar.js";

$('#wd-nav-sidebar').append(`
   <div class="container">
       <h1>navbar example</h1>
       ${NavigationSidebar()}
   </div>
`);