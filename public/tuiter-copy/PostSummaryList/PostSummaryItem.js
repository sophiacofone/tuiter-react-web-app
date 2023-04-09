const PostSummaryItem = (post) => {
    return(`
    <div class="list-group">
     <div class="list-group-item rounded-0" href="/">
     <div class="row">
     <div class="col-10">
        <div class="text-muted">${post.topic}</div>
        <div>
        <span class="bold">${post.userName}</span>
        <span class="m-lg-1"><i class="fa fa-circle"></i></span>
        <span class="text-muted" >-</span>
        <span class="text-muted" >${post.time}</span>
        </div>
        <div class="bold">${post.title}</div>
     </div>
     <div class="col-2 p-0">
        <img src=${post.image} class="w-100 h-100 rounded float-right" alt=${post.image}>
     </div>
     </div>
     </div>
   </div>


    `);
}
export default PostSummaryItem