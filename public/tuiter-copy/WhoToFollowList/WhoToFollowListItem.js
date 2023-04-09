const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group">
     <div class="list-group-item rounded-0" href="/">
     <div class="row">
     <div class="col-3">
        <img src=${who.avatarIcon} class="img-fluid img-custom-sm rounded-circle" alt=${who.avatarIcon}>
     </div>
     <div class="col-6 p-0 custom-text-size">
        <div><span class="bold">${who.userName}</span><span class="m-lg-1"><i class="fa fa-circle"></i></span></div>
        <div>@${who.handle}</div>
     </div>
      <div class="col-3 p-0">  
      <div class="overflow-hidden">
      <a href="../follow.html"
        class="btn btn-primary btn-sm rounded-pill">
        Follow</a>
      </div>    
     </div>
     </div>
     </div>
   </div>


    `);
}
export default WhoToFollowListItem