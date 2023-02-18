// import NavItem from "./NavItem.js";
const NavigationSidebar = (active) => {
    const currentPathname = window.location.pathname;
    console.log('hi');
    console.log(active);
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html">
       <i class="bi bi-house"></i><span class="d-none d-xl-inline m-lg-1">Home</span></a>
     <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../explore/index.html">
       <i class="fa fa-hashtag fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Explore</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Notifications</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Messages</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bookmark fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Bookmarks</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Lists</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-user fa-1x"></i><span class="d-none d-xl-inline m-lg-1">Profile</span></a>
     <a class="list-group-item" href="/">
       <i class="bi bi-three-dots"></i><span class="d-none d-xl-inline m-lg-1">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

export default NavigationSidebar;