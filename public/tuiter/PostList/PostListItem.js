const PostListItem = (post) => {
    return(`
    <div class="list-group">
     <div class="list-group-item rounded-0" href="/">
     <div class="row">
     <div class="col-1">
        <img src=${post.avatarIcon} class="img-fluid img-custom-sm rounded-circle" alt=${post.avatarIcon}>
     </div>
     <div class="col-10">
        <div>
        <span class="bold">${post.name}</span>
        <span class="m-lg-1"><i class="fa fa-circle"></i></span>
        <span class="text-muted">@${post.userName}</span>
        <span class="text-muted" >-</span>
        <span class="text-muted" >${post.time}</span>
        </div>
        <div>${post.title}</div>
     </div>
     <div class="col-1 p-0">
        <i class="bi bi-three-dots float-right"></i
     </div>
     </div>
     <div class="row">
     <div class="card mt-2">
        <img class="card-img-top" src="${post.image}" alt="...">
            <div class="card-body">
                <p class="card-text">${post.contenta}</p>
                <p class="card-text text-muted">${post.contentb}</p>
            </div>
     </div>
     </div>
     <div class="row text-center">
     <div class="col-3">
        <div>
        <span><i class="bi bi-chat m-lg-3"></i></span>
        <span>${post.comments}</span>
        </div>
     </div>
     <div class="col-3">
        <div>
        <span><i class="bi bi-arrow-left-right m-lg-3"></i></span>
        <span>${post.retuit}</div>
     </div>
     <div class="col-3">
        <div>
        <span><i class="bi bi-heart m-lg-3"></i></span>
        <span>${post.likes}</span>
        </div>
     </div>
     <div class="col-3">
        <div>
        <span><i class="bi bi-arrow-bar-up"></i></span>
        </div>
     </div>
   </div>


    `);
}
export default PostListItem